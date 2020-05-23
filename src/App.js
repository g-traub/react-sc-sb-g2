import React from "react";
import ChatMessage from './ui/chat/molecules/ChatMessage'

const author_0 = {
  nickname: "Guillaume",
  chatColor: "#F2994A",
  badges: ['prime', 'mod']
}

const author_1 = {
  nickname: "Jean",
  chatColor: "#bfe35c",
  badges: ['turbo', 'verified']
}

const author_2 = {
  nickname: "Christina",
  chatColor: "#3140cb",
  badges: ['turbo']
}

const author_3 = {
  nickname: "Maurice",
  chatColor: "#c42c61",
  badges: []
}

export default function App() {
  return (
    <div className="App">
      <ChatMessage author={author_0} text="Aurelien il commence a se faire tard la stop ton jeu vidéo et arrete de crier dans la maison "/>
      <ChatMessage author={author_1} text="Ah ah ah"/>
      <ChatMessage author={author_2} text="Pas de change Aurelien"/>
      <ChatMessage author={author_3} text="Sympa ce jeu"/>
      <ChatMessage author={author_1} text="ponceFLEUR"/>
      <ChatMessage author={author_1} text="C'est cool ces emotes ponceCOOL"/>
    </div>
  );
}
