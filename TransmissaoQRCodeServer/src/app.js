import fastify from 'fastify'
import { socketStart } from './socket/index.js'
import fastifySocketIO from 'fastify-socket.io'

export const app = fastify()

app.register(fastifySocketIO, {
  cors: {
    origin: ['https://localhost:3003', '*'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    exposedHeaders: ['Authorization', 'Content-Type'],
  },
})

socketStart()
