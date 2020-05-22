import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const placements = {
  top: {
    arrow: 'bottom: -3px;',
    tooltip: 'transform: translate(-50%, calc(-100% - 6px));'
  },
  bottom: {
    arrow: 'top: -3px;',
    tooltip: 'transform: translate(-50%, calc(100% + 6px));'
  }
};

const Wrapper = styled.span`
  position: relative;
  cursor: pointer;
`;

const TooltipWrapper = styled.span`
  position: absolute;
  left: 50%;
  z-index: 1000;
  padding: 3px 6px;
  border-radius: 4px;
  background-color: #040109;
  color: white;
  line-height: 1.2;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
  user-select: none;
  ${(props) => placements[props.placement].tooltip};

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    background-color: #040109;
    height: 6px;
    transform: rotate(45deg);
    width: 6px;
    z-index: -1;
    ${(props) => placements[props.placement].arrow}
  }
`;

const Tooltip = ({ title, target, placement, children }) => {
  const [isVisible, setIsVisible] = useState(0);

  return (
    <Wrapper
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible ? (
        <TooltipWrapper placement={placement}>{title}</TooltipWrapper>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

// Props
Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(Object.keys(placements)),
};

Tooltip.defaultProps = {
  placement: Object.keys(placements)[0],
};

export default Tooltip;
