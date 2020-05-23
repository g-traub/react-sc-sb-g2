import React from "react";
import ChatMessage from './ui/chat/molecules/ChatMessage'

const author = {
  nickname: "Guillaume",
  chatColor: "#F2994A",
  badges: ['prime', 'mod']
}

export default function App() {
  return (
    <div className="App">
      <ChatMessage author={author} text=" Aurelien il commence a se faire tard la stop ton jeu vidéo et arrete de crier dans la maison "/>
      <ChatMessage author={author} text=" Aurelien il commence a se faire tard la stop ton jeu vidéo et arrete de crier dans la maison "/>
    </div>
  );
}
