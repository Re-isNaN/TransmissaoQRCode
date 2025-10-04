import { Html5Qrcode } from 'html5-qrcode'
import { useEffect, useRef, useState } from 'react'
import './styles.css'
import { socketCliente } from '../../socket'

export function LeitorQRCode() {
  const [upt, setUpt] = useState(false)

  const [codigo, setCodigo] = useState('')

  const readerRef = useRef(null)
  const scanerRef = useRef(null)

  const [erro, setErro] = useState(false)

  const startScan = async () => {
    try {
      if (!readerRef.current) return

      const html5QrCode = new Html5Qrcode(readerRef.current.id)

      scanerRef.current = html5QrCode

      const devices = await Html5Qrcode.getCameras()
      if (devices && devices.length) {
        await html5QrCode.start(
          {
            facingMode: { exact: 'environment' },
          },
          { fps: 30, qrbox: { height: 200, width: 200 }, aspectRatio: 1 },
          (decodedText) => {
            setCodigo(decodedText)
          },
          (errorMessage) => {
            console.warn(errorMessage)
          },
        )
      }
    } catch (err) {
      setErro(true)
      console.error('Erro ao iniciar câmera:', err)
    }
  }

  const stopScan = async () => {
    try {
      if (!scanerRef.current) return
      scanerRef.current.stop()
    } catch (err) {
      console.error('Erro ao iniciar câmera:', err)
    }
  }

  const receberTexto = () => {
    socketCliente.emit('receber-msg', codigo)
  }

  useEffect(() => {
    setUpt(true)
  }, [])

  useEffect(() => {
    if (upt) {
      startScan()
    } else {
      stopScan()
    }

    return () => {
      stopScan()
    }
  }, [upt])

  return (
    <div style={{ width: '240px', height: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!erro ? (
            <div ref={readerRef} id="reader" style={{ width: '240px', height: '240px' }}></div>
          ) : (
            <div
              style={{
                width: '240px',
                height: '240px',
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 600,
                color: '#ff5500',
              }}
            >
              Erro ao iniciar câmera, digite manualmente!
            </div>
        )}

        <input style={{ width: '240px', height: '40px', textAlign: 'center', fontSize: '16px', marginBottom: '10px' }} placeholder="XXX-XXX" onChange={ev => setCodigo(ev.target.value)}/>

        <button className='btn-receber-texto' onClick={receberTexto}>
          Receber Texto
        </button>
    </div>
  )
}
