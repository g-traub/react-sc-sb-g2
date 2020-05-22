import styled from "styled-components";

const Tooltip = styled.span`
  position: absolute;  
  z-index: 1000;
  margin-bottom: 6px;
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

  ::after {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -3px;
    bottom: -3px;
    background-color: #040109;
    height: 6px;
    transform: rotate(45deg);
    width: 6px;
    z-index: -1;
  }
`;

export default Tooltip;
