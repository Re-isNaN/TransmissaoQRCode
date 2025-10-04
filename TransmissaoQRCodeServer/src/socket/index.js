import { app } from '../app.js'

export const socketStart = async () => {
  app.ready((err) => {
    if (err) {
      console.log(err)
    }

    app.io.on('connection', (socket) => {
      console.log('Alguem se conectou:', socket.id)

      // para o cliente ter acesso a pedir com qrcode
      socket.on('join-usuario', async () => {
        socket.join(`usuario-${socket.id}`)

        // guarda o id enviar depois
        socket.emit('id-qrcode', socket.id)
      })

      // aqui é disparado quando o qrcode é lido
      socket.on('receber-msg', (room) => {
        console.log(room)
        // emite um evento para o usuario pedindo o pedido
        socket.to(`usuario-${room}`).emit('envio-msg', socket.id)
      })

      // evento disparado quando o usuario manda o pedido
      socket.on('msg', ({ room, msg }) => {

        console.log(msg)
        console.log(room)

        // envia o pedido para o garcom que requisitou
        socket.to(room).emit('msg', msg)
      })
    })
  })
}
