import { FastifyInstance } from 'fastify'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { getAll } from './get-all'
import { get } from './get'

import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function quizzesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/quizzes', { onRequest: [verifyUserRole('ADMIN')] }, create)
  app.get('/quizzes', { onRequest: [verifyUserRole('MEMBER')] }, getAll)
  app.get('/quizzes/:id', { onRequest: [verifyUserRole('MEMBER')] }, get)
}
