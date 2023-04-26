import { prisma } from '../../lib/prisma'
import { Prisma, Quizzes } from '@prisma/client'

import { QuizzesRepository } from '../quizzes-repository'

export class PrismaQuizzesRepository implements QuizzesRepository {
  async getAll(): Promise<Quizzes[]> {
    const quizzes = await prisma.quizzes.findMany({
      include: {
        questions: true,
      },
    })
    return quizzes
  }

  async getById(id: string): Promise<Quizzes | null> {
    const quiz = await prisma.quizzes.findUnique({
      where: {
        id,
      },
      include: {
        questions: {
          include: {
            alternatives: true,
          },
        },
      },
    })
    return quiz
  }

  async create(data: Prisma.QuizzesCreateInput) {
    const quiz = await prisma.quizzes.create({
      data,
    })

    return quiz
  }
}
