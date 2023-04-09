import { Quizzes } from '@prisma/client'

export interface Alternative {
  content: string
  isCorrect: boolean
}

export interface Question {
  content: string
  alternatives: Alternative[]
}

export interface CreateQuizUseCaseRequest {
  title: string
  level: number
  questions: Question[]
}

export interface GetQuizUseCaseRequest {
  id: string
}

export interface CreateQuizUseCaseResponse {
  quiz: Quizzes
}

export interface GetAllQuizUseCaseResponse {
  quizzes: Quizzes[]
}

export interface GetQuizUseCaseResponse {
  quizzes: Quizzes | null
}
