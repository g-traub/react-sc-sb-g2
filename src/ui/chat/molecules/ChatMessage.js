import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// components
import ChatMessageAuthor from "../atoms/ChatMessageAuthor";
import Tooltip from "../../global/atoms/Tooltip";
import Icon from "../../global/atoms/Icon";

const ChatMessageWrapper = styled.div`
  padding: 0.5rem 2rem;
  word-wrap: break-word;
`;

const ChatMessage = ({ author, text }) => {
  const Badges = author.badges.map(iconName => (
    <Tooltip title="tooltip">
      <Icon name={iconName}/>
    </Tooltip>
  ));

  return (
    <ChatMessageWrapper>
      {Badges}
      <ChatMessageAuthor color={author.chatColor}>
        {author.nickname}
      </ChatMessageAuthor>
      <span>{text}</span>
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
