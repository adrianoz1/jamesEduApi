export interface History {
  id: string
  title: string
  level: number
  questions: number
  points: number
}

export interface CreateHistoryRequest {
  title: string
  level: number
  questions: number
  points: number
  userId: string
  quizId: string
}

export interface CreateHistoryRespose {
  history: History
}
