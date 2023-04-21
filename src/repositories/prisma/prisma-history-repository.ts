import { prisma } from '@/lib/prisma'
import { Prisma, History } from '@prisma/client'

import { HistoryRepository } from '../history-repository'

export class PrismaHistoryRepository implements HistoryRepository {
  async getAll(): Promise<History[]> {
    const history = await prisma.history.findMany()
    return history
  }

  async getById(id: string): Promise<History | null> {
    const history = await prisma.history.findUnique({
      where: {
        id,
      },
    })
    return history
  }

  async create(data: Prisma.HistoryUncheckedCreateInput) {
    const history = await prisma.history.create({
      data,
    })

    return history
  }
}
