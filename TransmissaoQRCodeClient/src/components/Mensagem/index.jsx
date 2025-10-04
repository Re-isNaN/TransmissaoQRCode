import { useMensagemContext } from "../../contexts/mensagem"

export function Mensagem(){
    const { setMensagem, mensagem } = useMensagemContext()

    return (
        <textarea 
            style={{ marginTop: '16px', fontSize: '16px', width: '300px', height: '180px', padding: '8px' }} 
            placeholder="Digite um texto..." 
            value={mensagem} 
            onChange={(ev) => setMensagem(ev.target.value)}
        />
    )
}