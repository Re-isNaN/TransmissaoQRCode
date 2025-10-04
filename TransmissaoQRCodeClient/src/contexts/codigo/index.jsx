import { createContext, useContext, useEffect, useState } from 'react'
import { socketCliente } from '../../socket'

const CodigoContext = createContext({})

export const useCodigoContext = () => {
  return useContext(CodigoContext)
}

export function CodigoProvider({ children }) {
  const [codigo, setCodigo] = useState('')
  
  useEffect(() => {
      socketCliente.emit('join-usuario')
  
    socketCliente.on('id-qrcode', dados => {
      setCodigo(dados)
      window.sessionStorage.setItem('codigo', dados)
    })
  }, [])

  return (
    <CodigoContext.Provider value={{ codigo }}>
      {children}
    </CodigoContext.Provider>
  )
}
