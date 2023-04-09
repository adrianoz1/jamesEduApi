import { PrismaQuizzesRepository } from '@/repositories/prisma/prisma-quizzes-repository'
import { GetQuizzesUseCase } from '../quiz/get'

export function makeGetQuizzesUseCase() {
  const quizzesRepository = new PrismaQuizzesRepository()
  const getQuizzesUseCase = new GetQuizzesUseCase(quizzesRepository)

  return getQuizzesUseCase
}
