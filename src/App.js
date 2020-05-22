import React from "react";
import ChatMessage from './ui/chat/molecules/ChatMessage'

const author = {
  nickname: "Guillaume",
  chatColor: "#61dafb"
}

export default function App() {
  return (
    <div className="App">
      <ChatMessage author={author} text="antoine mes ton pc dans du riz"/>
    </div>
  );
}
