import { QuizzesRepository } from '../../repositories/quizzes-repository'
import { GetAllQuizUseCaseResponse } from './types'

export class GetAllQuizzesUseCase {
  constructor(private quizzesRepository: QuizzesRepository) {}

  async execute(): Promise<GetAllQuizUseCaseResponse> {
    const quizzes = await this.quizzesRepository.getAll()

    return {
      quizzes,
    }
  }
}
