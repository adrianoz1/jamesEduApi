import { expect, describe, it, beforeEach, vi } from 'vitest'
import { GetAllQuizzesUseCase } from '../get-all'
import { QuizzesRepository } from '@/repositories/quizzes-repository'

let quizzesRepository: QuizzesRepository
let sut: GetAllQuizzesUseCase

describe('Get Quiz Use Case', () => {
  beforeEach(() => {
    quizzesRepository = {
      create: vi.fn(),
      getById: vi.fn(),
      getAll: vi.fn(),
    }
    sut = new GetAllQuizzesUseCase(quizzesRepository)
  })

  it('should to get all quizzes', async () => {
    await sut.execute()
    expect(quizzesRepository.getAll).toBeCalled()
  })
})
