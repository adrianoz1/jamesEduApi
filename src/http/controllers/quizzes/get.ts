import { makeGetQuizzesUseCase } from '../../../use-cases/factories/make-get-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const quiz = z.object({
    id: z.string(),
  })

  const { id } = quiz.parse(request.params)

  const getQuizzes = makeGetQuizzesUseCase()

  const { quizzes } = await getQuizzes.execute({ id })

  return reply.status(200).send({
    quizzes,
  })
}
