import { HistoryRepository } from '@/repositories/history-repository'
import { CreateHistoryRequest, CreateHistoryRespose } from './types'
import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from '../errors/user-already-exists-error'
import { QuizzesRepository } from '@/repositories/quizzes-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

export class CreateHistoryUseCase {
  constructor(
    private historyRepository: HistoryRepository,
    private usersRepository: UsersRepository,
    private quizzesRepository: QuizzesRepository,
  ) {}

  async execute({
    title,
    level,
    questions,
    points,
    userId,
    quizId,
  }: CreateHistoryRequest): Promise<CreateHistoryRespose> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new UserAlreadyExistsError()
    }

    const quiz = await this.quizzesRepository.getById(quizId)

    if (!quiz) {
      throw new ResourceNotFoundError()
    }

    const history = await this.historyRepository.create({
      title,
      level,
      questions,
      points,
      user_id: userId,
      quiz_id: quizId,
    })

    return {
      history,
    }
  }
}
