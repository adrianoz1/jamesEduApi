import { expect, describe, it, beforeEach, vi } from 'vitest'
import { GetQuizzesUseCase } from '../get'
import { QuizzesRepository } from '../../../repositories/quizzes-repository'

let quizzesRepository: QuizzesRepository
let sut: GetQuizzesUseCase

describe('Get Quiz Use Case', () => {
  beforeEach(() => {
    quizzesRepository = {
      create: vi.fn(),
      getById: vi.fn(),
      getAll: vi.fn(),
    }
    sut = new GetQuizzesUseCase(quizzesRepository)
  })

  it('should to get quiz', async () => {
    await sut.execute({ id: 'fake-id' })
    expect(quizzesRepository.getById).toBeCalled()
  })
})
