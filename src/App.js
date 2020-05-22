import React from "react";
import Badge, { colors } from "./ui/global/atoms/Badge";
import Tooltip from "./ui/global/atoms/Tooltip";

export default function App() {
  return (
    <div className="App">
      <Badge text="IRL" color={colors.purple} />
      <Badge text="IRL" color={colors.grey} />
      <Tooltip>tooltip</Tooltip>
    </div>
  );
}
