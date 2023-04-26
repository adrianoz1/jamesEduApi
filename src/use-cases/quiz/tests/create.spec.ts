import { expect, describe, it, beforeEach, vi } from 'vitest'
import { CreateQuizUseCase } from '../create'
import { QuizzesRepository } from '../../../repositories/quizzes-repository'
import { createMockQuiz } from './mocks/create-quiz-mock'

let quizzesRepository: QuizzesRepository
let sut: CreateQuizUseCase

describe('Create Quiz Use Case', () => {
  beforeEach(() => {
    quizzesRepository = {
      create: vi.fn(),
      get: vi.fn(),
    }
    sut = new CreateQuizUseCase(quizzesRepository)
  })

  it('should to create quiz', async () => {
    const input = createMockQuiz()

    await sut.execute(input)
    expect(quizzesRepository.create).toBeCalled()
  })
})
