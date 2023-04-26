import { PrismaHistoryRepository } from '../../repositories/prisma/prisma-history-repository'
import { PrismaUsersRepository } from '../../repositories/prisma/prisma-users-repository'
import { PrismaQuizzesRepository } from '../../repositories/prisma/prisma-quizzes-repository'

import { CreateHistoryUseCase } from '../history/create'

export function makeCreateHistoryUseCase() {
  const historyRepository = new PrismaHistoryRepository()
  const usersRepository = new PrismaUsersRepository()
  const quizzesRepository = new PrismaQuizzesRepository()

  const createHistoryUseCase = new CreateHistoryUseCase(
    historyRepository,
    usersRepository,
    quizzesRepository,
  )

  return createHistoryUseCase
}
