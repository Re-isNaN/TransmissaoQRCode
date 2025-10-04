import fastify from 'fastify'
import { socketStart } from './socket/index.js'
import fastifySocketIO from 'fastify-socket.io'

export const app = fastify()

app.register(fastifySocketIO, {
  cors: {
    origin: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    exposedHeaders: ['Authorization', 'Content-Type'],
  },
})

socketStart()
