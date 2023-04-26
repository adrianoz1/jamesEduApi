import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateQuizUseCase } from '../../../use-cases/factories/make-create-quiz-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    level: z.number(),
    questions: z.array(
      z.object({
        content: z.string(),
        alternatives: z.array(
          z.object({
            content: z.string(),
            isCorrect: z.boolean(),
          }),
        ),
      }),
    ),
  })

  const { level, questions, title } = registerBodySchema.parse(request.body)

  try {
    const createQuizUseCase = makeCreateQuizUseCase()

    await createQuizUseCase.execute({
      level,
      title,
      questions,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
