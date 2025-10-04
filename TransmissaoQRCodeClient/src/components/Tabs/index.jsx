import { useState } from "react";
import { MeuQRCode } from "../MeuQRCode";
import { LeitorQRCode } from "../LeitorQRCode";

const tabs = [
  { label: "Meu QRCode", content: <MeuQRCode /> },
  { label: "Ler QRCode", content: <LeitorQRCode /> },
]

export function Tabs(){
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div style={{ padding: "20px" }}>
                {tabs[activeIndex].content}
            </div>

            <div style={{ display: "flex", width: '240px', borderBottom: "2px solid #ccc" }}>
                {tabs.map((tab, index) => (
                    <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    style={{
                        flex: 1,
                        padding: "10px",
                        cursor: "pointer",
                        border: "none",
                        borderBottom: activeIndex === index ? "3px solid #1976d2" : "3px solid transparent",
                        background: "none",
                        fontWeight: activeIndex === index ? "bold" : "normal",
                        color: activeIndex === index ? "#1976d2" : "#555",
                        transition: "all 0.2s ease",
                    }}
                    >
                    {tab.label}
                    </button>
                ))}
            </div>
        </>
    )
}