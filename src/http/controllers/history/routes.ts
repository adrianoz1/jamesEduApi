import { FastifyInstance } from 'fastify'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { create } from './create'

import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function historyRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/history', { onRequest: [verifyUserRole('MEMBER')] }, create)
}
