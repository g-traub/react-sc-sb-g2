import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { urlRegex } from "../../../utils/regex";
// components
import ChatMessageAuthor from "../atoms/ChatMessageAuthor";
import Tooltip from "../../global/atoms/Tooltip";
import ChatBadge, { badges } from "../atoms/ChatBadge";
import ChatEmote, { emotes } from "../atoms/ChatEmote";
import ChatLink from "../atoms/ChatLink";
// design tokens
import Colors from "../../global/particles/Colors";

const parseText = (text) => {
  const parsed = text.split(" ").map((word, index) => {
    if (word in emotes === true) {
      return (
        <Tooltip title={word} key={word}>
          <ChatEmote name={word}></ChatEmote>
        </Tooltip>
      );
    } else if (urlRegex.test(word)) {
      return <ChatLink href={word} key={word}>{word}</ChatLink>;
    } else {
      return ` ${word}`;
    }
  });
  return parsed;
};

const ChatMessageWrapper = styled.div`
  font-family: "Roobert TRIAL";
  font-size: 12px;
  line-height: 140%;
  padding: 0.5rem 2rem;
  word-wrap: break-word;
  color: ${Colors.darker_grey};
`;

const ChatMessage = ({ author, text }) => {
  const Badges =
    author.badges &&
    author.badges.map((badgeName, i) => (
      <Tooltip title={badges[badgeName].tooltipName} key={i}>
        <ChatBadge name={badgeName} />
      </Tooltip>
    ));

  return (
    <ChatMessageWrapper>
      {Badges}
      <ChatMessageAuthor color={author.chatColor}>
        {author.nickname}
      </ChatMessageAuthor>
      <span> {parseText(text)}</span>
    </ChatMessageWrapper>
  );
};

// Props
ChatMessage.propTypes = {
  author: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    chatColor: PropTypes.string,
    badges: PropTypes.arrayOf(PropTypes.string),
  }),
  text: PropTypes.string.isRequired,
};

export default ChatMessage;
