import { QuizzesRepository } from '../../repositories/quizzes-repository'
import { CreateQuizUseCaseRequest, CreateQuizUseCaseResponse } from './types'

export class CreateQuizUseCase {
  constructor(private quizzesRepository: QuizzesRepository) {}

  async execute({
    title,
    level,
    questions,
  }: CreateQuizUseCaseRequest): Promise<CreateQuizUseCaseResponse> {
    const quiz = await this.quizzesRepository.create({
      title,
      level,
      questions: {
        create: questions.map((question) => ({
          content: question.content,
          alternatives: {
            createMany: {
              data: question.alternatives.map(({ content, isCorrect }) => ({
                content,
                is_correct: isCorrect,
              })),
            },
          },
        })),
      },
    })

    return {
      quiz,
    }
  }
}
