import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateHistoryUseCase } from '@/use-cases/factories/make-create-history-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    level: z.number(),
    questions: z.number(),
    points: z.number(),
    quizId: z.string(),
  })

  const userId = request.user.sub

  const { level, questions, title, points, quizId } = registerBodySchema.parse(
    request.body,
  )

  try {
    const createHistoryUseCase = makeCreateHistoryUseCase()

    await createHistoryUseCase.execute({
      level,
      title,
      questions,
      points,
      userId,
      quizId,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
