import React from "react";
import ChatMessage from "../ui/chat/molecules/ChatMessage";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "ChatMessage",
  component: ChatMessage,
  decorators: [withKnobs],
};

const authorDefault = {
  nickname: "Guillaume",
  chatColor: "#F2994A",
};

const authorWithChatBadges = {
  nickname: "Guillaume",
  chatColor: "#F2994A",
  badges: ["prime", "mod"],
};


export const Default = () => (
  <ChatMessage
    author={authorDefault}
    text=" Aurelien il commence a se faire tard la stop ton jeu video et arrete de crier dans la maison "
  />
);

export const WithChatBadges = () => (
  <ChatMessage
    author={authorWithChatBadges}
    text=" Aurelien il commence a se faire tard la stop ton jeu video et arrete de crier dans la maison "
  />
);
