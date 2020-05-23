import React from "react";
import ChatMessage from "../ui/chat/molecules/ChatMessage";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "ChatMessage",
  component: ChatMessage,
  decorators: [withKnobs],
};

const author_0 = {
  nickname: "Guillaume",
  chatColor: "#F2994A",
};

const author_1 = {
  nickname: "Guillaume",
  chatColor: "#F2994A",
  badges: ["prime", "mod"],
};

const author_2 = {
    nickname: "Jean",
    chatColor: "#bfe35c",
    badges: ['turbo', 'verified']
}

export const Default = () => (
  <ChatMessage
    author={author_0}
    text=" Aurelien il commence a se faire tard la stop ton jeu video et arrete de crier dans la maison "
  />
);

export const WithChatBadges = () => (
  <ChatMessage
    author={author_1}
    text=" Aurelien il commence a se faire tard la stop ton jeu video et arrete de crier dans la maison "
  />
);

export const WithChatEmotes = () => <ChatMessage author={author_2} text="C'est cool ces emotes ponceCOOL ponceFLEUR"/>

export const WithChatLinks = () => <ChatMessage author={author_2} text="La documentation du projet : https://stackoverflow.com"/>
