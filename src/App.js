import React from "react";
import ChatMessage from './ui/chat/molecules/ChatMessage'

const author_0 = {
  userName: "Guillaume",
  userColor: "#F2994A",
  badges: ['prime', 'mod']
}

const author_1 = {
  userName: "Jean",
  userColor: "#bfe35c",
  badges: ['turbo', 'verified']
}

const author_2 = {
  userName: "Christina",
  userColor: "#3140cb",
  badges: ['turbo']
}

const author_3 = {
  userName: "Maurice",
  userColor: "#c42c61",
  badges: []
}

export default function App() {
  return (
    <div className="App">
      <ChatMessage author={author_0} message="Aurelien il commence a se faire tard la stop ton jeu vidéo et arrete de crier dans la maison "/>
      <ChatMessage author={author_1} message="Ah ah ah"/>
      <ChatMessage author={author_2} message="Pas de change Aurelien"/>
      <ChatMessage author={author_3} message="Sympa ce jeu"/>
      <ChatMessage author={author_1} message="ponceFLEUR"/>
      <ChatMessage author={author_1} message="C'est cool ces emotes ponceCOOL"/>
      <ChatMessage author={author_0} message="La documentation du projet : https://stackoverflow.com"/>
    </div>
  );
}
