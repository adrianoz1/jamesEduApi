import { PrismaQuizzesRepository } from '../../repositories/prisma/prisma-quizzes-repository'
import { CreateQuizUseCase } from '../quiz/create'

export function makeCreateQuizUseCase() {
  const quizzesRepository = new PrismaQuizzesRepository()
  const createQuizUseCase = new CreateQuizUseCase(quizzesRepository)

  return createQuizUseCase
}
