import React from "react";
import Tooltip from "./ui/global/atoms/Tooltip";
import ChatMessageAuthor from './ui/chat/atoms/ChatMessageAuthor'

export default function App() {
  return (
    <div className="App">
      <Tooltip title="tooltip">
        <span>Hover me</span>
      </Tooltip>
      <ChatMessageAuthor color="#f74d0a">Guillaume</ChatMessageAuthor>
    </div>
  );
}
