import React from "react";
import ChatMessage from "../ui/chat/molecules/ChatMessage";
import { withKnobs, color, text, optionsKnob as options } from '@storybook/addon-knobs';

export default {
  title: "ChatMessage",
  component: ChatMessage,
  decorators: [withKnobs],
};

// Knobs
const label = 'Badges';
const valuesObj = {
  staff: "staff",
  admin: "admin",
  prime: "prime",
  turbo: "turbo",
  broadcaster: "broadcaster",
  mod: "mod",
  verified: "verified",
  vip: "vip",
};
const defaultValue = 'prime';
const optionsObj = {
  display: 'multi-select'
};
const badgesValue = options(label, valuesObj, defaultValue, optionsObj, 'Auteur');

const authorValue = {
  nickname: text("Nom d'utilisateur", "Guillaume", "Auteur"),
  chatColor: color("Couleur", "#F2994A", "Auteur"),
  badges: [badgesValue]
}
const textValue = text("Message", "Aurelien il commence a se faire tard la stop ton jeu video et arrete de crier dans la maison", "Message")

// Exemples
export const Default = () => (
  <ChatMessage
    author={authorValue}
    text={textValue}
  />
);

export const WithChatBadges = () => (
  <ChatMessage
    author={authorValue}
    text={textValue}
  />
);

export const WithChatEmotes = () => <ChatMessage author={authorValue} text="C'est cool ces emotes ponceCOOL ponceFLEUR"/>

export const WithChatLinks = () => <ChatMessage author={authorValue} text="La documentation du projet : https://stackoverflow.com"/>