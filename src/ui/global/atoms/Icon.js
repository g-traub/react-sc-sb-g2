import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IconWrapper = styled.img`
  display: inline-block;
  margin-bottom: .2rem;
  margin-right: .3rem;
  vertical-align: middle;
`;

const Icon = ({url, name, className}) => {
  return <IconWrapper src={url} alt={name} className={className}></IconWrapper>;
};

Icon.propTypes = {
  url: PropTypes.string.isRequired
};

export default Icon;
