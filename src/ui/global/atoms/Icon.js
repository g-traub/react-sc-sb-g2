import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const colors = {
  purple: "purple",
  grey: "grey"
};

const IconWrapper = styled.span`
  display: flex;
`;

const IconWrapperItem = styled.span`
  width: 18px;
  height: 18px;
  margin-right: 2px;
  background-color: red;
`;

const Icon = props => {
  const {icons} = props;
  console.log(icons)
  const listIcons = icons.map((icon, i) =>
    <IconWrapperItem key={i}>
      <img src={icon.url} alt={icon.url}/>
    </IconWrapperItem>
  );

  return <IconWrapper>{listIcons}</IconWrapper>;
};

Icon.propTypes = {
  icons: PropTypes.array.isRequired
};

Icon.defaultProps = {
  color: colors.grey
};

export default Icon;
