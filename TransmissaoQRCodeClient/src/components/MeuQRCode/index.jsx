import { QRCodeCanvas } from "qrcode.react";
import { useCodigoContext } from "../../contexts/codigo";

export function MeuQRCode(){
    const { codigo } = useCodigoContext()

    const copiarCodigo = async () => {
        console.log(codigo)
        await navigator.clipboard.writeText(codigo);
    }

    return (
        <div style={{ width: '240px', height: '320px' }}>
            {!codigo ? 'Carregando' : <QRCodeCanvas style={{ width: '248px', height: '240px', marginBottom: '10px' }} value={codigo} />}
            
            <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
                <input disabled style={{ width: '100%', height: '40px', textAlign: 'center', fontSize: '14px' }} placeholder={codigo || ''} />

                <button onClick={copiarCodigo}>Copiar</button>
            </div>
        </div>
    )
}