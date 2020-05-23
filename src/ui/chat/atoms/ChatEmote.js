import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../../global/atoms/Icon"

// Emotes would be normally fetched
export const emotes = {
  ponceFLEUR: "https://static-cdn.jtvnw.net/emoticons/v1/301716641/2.0"
};

const ChatEmoteWrapper = styled(Icon)`
  display: inline-block;
  width: 28px;
  max-height: 28px;
`
const ChatEmote = ({name}) => <ChatEmoteWrapper url={emotes[name]} name={name}></ChatEmoteWrapper>;

ChatEmote.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChatEmote;