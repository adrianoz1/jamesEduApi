import { PrismaQuizzesRepository } from '@/repositories/prisma/prisma-quizzes-repository'
import { GetAllQuizzesUseCase } from '../quiz/get-all'

export function makeGetAllQuizzesUseCase() {
  const quizzesRepository = new PrismaQuizzesRepository()
  const getAllQuizzesUseCase = new GetAllQuizzesUseCase(quizzesRepository)

  return getAllQuizzesUseCase
}
