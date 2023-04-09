import { Prisma, Quizzes } from '@prisma/client'

export interface QuizzesRepository {
  create(data: Prisma.QuizzesCreateInput): Promise<Quizzes>
  getAll(): Promise<Quizzes[]>
  getById(id: string): Promise<Quizzes | null>
}
