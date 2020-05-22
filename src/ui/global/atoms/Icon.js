import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const icons = {
  staff: 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1',
  admin: 'https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/1',
  prime: 'https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/1',
  turbo: 'https://static-cdn.jtvnw.net/badges/v1/bd444ec6-8f34-4bf9-91f4-af1e3428d80f/1',
  broadcaster: 'https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3',
  mod: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1',
  verified: 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1',
  vip: 'https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3',
}

const IconWrapper = styled.img`
  display: inline-block;
  margin-bottom: .2rem;
  margin-right: .3rem;
  vertical-align: middle;
`;

const Icon = ({name}) => {
  return <IconWrapper src={icons[name]} alt={name}></IconWrapper>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
