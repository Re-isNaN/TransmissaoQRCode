import { createContext, useContext, useEffect, useState } from 'react'
import { socketCliente } from '../../socket'

const MensagemContext = createContext({})

export const useMensagemContext = () => {
  return useContext(MensagemContext)
}

export function MensagemProvider({ children }) {
  const [mensagem, setMensagem] = useState('')
  
  useEffect(() => {
    socketCliente.on('envio-msg', dados => {
      socketCliente.emit('msg', {
        room: dados,
        msg: mensagem
       })
    })

    socketCliente.on('msg', msg => setMensagem(msg))
  }, [mensagem])

  return (
    <MensagemContext.Provider value={{ mensagem, setMensagem }}>
      {children}
    </MensagemContext.Provider>
  )
}
