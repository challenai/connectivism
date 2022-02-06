import React from "react";
import { Heading, Pane, Text, Li, Ul, Popover, Strong } from "evergreen-ui";

function App({ content, card }) {
  return (
    <Popover
      content={
        <Pane
          maxWidth={360}
          maxHeight={720}
          padding={36}
          display="flex"
          alignItems="flexStart"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading marginBottom={8}>根据用户id获取用户信息</Heading>
          <Text>parameter: ID</Text>
          <Text>response: User</Text>
        </Pane>
      }
    >
      <Text cursor="pointer" style={{ color: "#5C85FF" }}>
        GetUserByID
      </Text>
    </Popover>
  );
}

export default App;
