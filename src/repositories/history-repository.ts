import { Prisma, History } from '@prisma/client'

export interface HistoryRepository {
  create(data: Prisma.HistoryUncheckedCreateInput): Promise<History>
}
