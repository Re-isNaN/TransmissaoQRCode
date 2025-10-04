import { io } from 'socket.io-client'

export const socketCliente = io('http://localhost:3004')
