import { app } from '../app.js'

export const socketStart = async () => {
  app.ready((err) => {
    if (err) {
      console.log(err)
    }

    app.io.on('connection', (socket) => {
      console.log('Alguem se conectou:', socket.id)

      /**
       * @description o usuário se conecta a uma sala para poder receber eventos
       */
      socket.on('join-usuario', async () => {
        socket.join(`usuario-${socket.id}`)

        /**
        * @description envia o id da sala que foi conectado para poder salvar e copiar
        */
        socket.emit('id-qrcode', socket.id)
      })

      
      /**
      * @description evento disparado quando o usuário que receber a mensagem de um cliente na sala 'room'
      */
      socket.on('receber-msg', (room) => {
        console.log(room)
       
        /**
        * @description emite um evento para o cliente requisitando o envio da mensagem, com o socket id de quem está requisitando
        */
        socket.to(`usuario-${room}`).emit('envio-msg', socket.id)
      })

      /**
      * @description evento emitido para transmitir a mensagem para o cliente que pediu
      */
      socket.on('msg', ({ room, msg }) => {

        console.log(msg)
        console.log(room)

        /**
        * @description envia a mensagem para quem requisitou
        */
        socket.to(room).emit('msg', msg)
      })
    })
  })
}
