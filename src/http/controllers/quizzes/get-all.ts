import { makeGetAllQuizzesUseCase } from '@/use-cases/factories/make-get-all-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function getAll(_: FastifyRequest, reply: FastifyReply) {
  const getAllQuizzes = makeGetAllQuizzesUseCase()
  const { quizzes } = await getAllQuizzes.execute()

  return reply.status(200).send({
    quizzes,
  })
}
