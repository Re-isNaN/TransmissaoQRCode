# Transmissão QR Code

## Introdução

Este projeto é um aplicativo simples de mensageria desenvolvido para demonstrar a transmissão de dados por meio de QR Codes.
Inicialmente, o dado transmitido é um texto, mas a arquitetura permite a extensão para estruturas mais complexas, como listas, objetos JSON ou trechos de código.

Devido à limitação de tamanho dos QR Codes, foi integrado um sistema de comunicação via WebSocket, possibilitando transmissões **client-to-client** e o envio eficiente de mensagens longas.

![Visual](./assets/exemplo.png)

### !! IMPORTANTE !!
O projeto funciona com https ou localhost, por conta de permissão de acesso a webcam e transmissão de dados com socket

**Recomendado** usar `ngrok` ou `certificado autoassinado` para desenvolvimento

---

## 🧠 Tecnologias e Abordagem

- **Gerador e Scanner QRCode**: Implementa bibliotecas para gerar e escanear qrcode de forma dinâmica.
- **WebSocket**: Comunicação bidirecional em tempo real.

---

## 🚀 Principais pontos do Projeto

- **Transmissão de dados grandes client to client**
- **Comunicação em tempo real**

---

## Client Side

O FrontEnd da aplicação foi construído utilizando ReactJS e duas principais bibliotecas para gerar e escanear qrcode, `qrcode.react` e `html5-qrcode`. 

A lib `qrcode.react` é utilizada para gerar um qrcode com o código que referencia o web socket no qual o cliente está conectado.

Já a lib `html5-qrcode` é utilizada para escanear qrcode, além disso, essa biblioteca permite escanear outros tipos de códigos, como código de barras, etc.


## Server Side

O Backend do projeto é utilizado para gerenciar a comunicação **client to client** do projeto, servindo como um intermediário entre os `eventos disparados`
e gerenciando os `rooms` em que estão conectados. Nesse sentido, o servidor recebe o evento de um cliente e dispara um evento para outro cliente, visto que
`Web Socket` se comporta de forma bidirecional **client to server** e **server to client**.


## 🔗 **Links Úteis**
- [Web Socket](https://socket.io/)
- [QR Code React](https://www.npmjs.com/package/qrcode.react)
- [html5-qrcode](https://github.com/mebjas/html5-qrcode)