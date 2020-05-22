import React from "react";
import Badge, { colors } from "./ui/global/atoms/Badge";

export default function App() {
      return (
            <div className="App">
                <Badge text="IRL" color={colors.purple}/>
                <Badge text="IRL" color={colors.grey}/>
            </div>
      );
}
