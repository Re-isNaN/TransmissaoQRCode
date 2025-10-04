import { CodigoProvider } from "./contexts/codigo";
import { Tabs } from "./components/Tabs";
import { MensagemProvider } from "./contexts/mensagem";
import { Mensagem } from "./components/Mensagem";


export function App() {
  return (
    <CodigoProvider>
      <MensagemProvider>
        <div style={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Tabs />

          <Mensagem />
        </div>
      </MensagemProvider>
    </CodigoProvider>
    )
}
