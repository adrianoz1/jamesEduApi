import { QuizzesRepository } from '../../repositories/quizzes-repository'
import { GetQuizUseCaseRequest, GetQuizUseCaseResponse } from './types'

export class GetQuizzesUseCase {
  constructor(private quizzesRepository: QuizzesRepository) {}

  async execute({
    id,
  }: GetQuizUseCaseRequest): Promise<GetQuizUseCaseResponse> {
    const quizzes = await this.quizzesRepository.getById(id)

    console.log(quizzes)

    return {
      quizzes,
    }
  }
}
