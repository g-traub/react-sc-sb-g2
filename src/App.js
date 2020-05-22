import React from "react";
import Badge, {colors} from "./ui/global/atoms/Badge";
import Icon from "./ui/global/atoms/Icon";

export default function App() {
  return (
    <div className="App">
      {/*<Badge text="IRL" color={colors.purple}/>*/}
      {/*<Badge text="IRL" color={colors.grey}/>*/}
      <Icon
        icons={[{url: 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1'}, {url: 'https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/1'}]}
      />
      <Icon
        icons={[{url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1'}]}
      />
      <Icon
        icons={[{url: 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1'}]}
      />
    </div>
  );
}
