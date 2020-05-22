import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { hexColorRegex } from "../../../utils/regex";

const ChatMessageAuthorWrapper = styled.span`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  ${({color}) => `color: ${color}`}
`
const showProfilePopOver = () => {
  console.log('profile shown')
}

const ChatMessageAuthor = ({color, children}) => (
  <span onClick={showProfilePopOver}>
    <ChatMessageAuthorWrapper color={color}>{children}</ChatMessageAuthorWrapper>
    :
  </span>
)

// Props
const hexColorValidator = (props,  propName, componentName) => {
  if (!hexColorRegex.test(props[propName])) {
    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid hexadecimal color.`);
  }
}

ChatMessageAuthor.propTypes = {
  color: hexColorValidator,
  children: PropTypes.string.isRequired
};

export default ChatMessageAuthor;