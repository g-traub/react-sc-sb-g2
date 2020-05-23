import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// components
import ChatMessageAuthor from "../atoms/ChatMessageAuthor";
import Tooltip from "../../global/atoms/Tooltip";
import Icon from "../../global/atoms/Icon";
import ChatEmote, { emotes } from "../atoms/ChatEmote";
// design tokens
import Colors from "../../global/particles/Colors";
import { icons } from "../../global/atoms/Icon";

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
    author.badges.map((iconName, i) => (
      <Tooltip title={icons[iconName].tooltipName} key={i}>
        <Icon name={iconName} />
      </Tooltip>
    ));

  return (
    <ChatMessageWrapper>
      {Badges}
      <ChatMessageAuthor color={author.chatColor}>
        {author.nickname}
      </ChatMessageAuthor>
      <span> {text}</span>
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
