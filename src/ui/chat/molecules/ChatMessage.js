import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ChatMessageAuthor from "../atoms/ChatMessageAuthor";
import Tooltip from "../../global/atoms/Tooltip";

const ChatMessageWrapper = styled.div`
  padding: 0.5rem 2rem;
  word-wrap: break-word;
`;

const ChatMessage = ({ author, text }) => (
  <ChatMessageWrapper>
    <Tooltip title="tooltip">
      <span>Hover me</span>
    </Tooltip>
    <ChatMessageAuthor color={author.chatColor}>{author.nickname}</ChatMessageAuthor>
    <span>{text}</span>
  </ChatMessageWrapper>
);

// Props
ChatMessage.propTypes = {
  author: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    chatColor: PropTypes.string,
    badges: PropTypes.arrayOf(PropTypes.string)
  }),
  text: PropTypes.string.isRequired,
};

export default ChatMessage;
