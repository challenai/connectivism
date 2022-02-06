import React from "react";
import "./Graph.css";
import DraggableBox from "./DraggableBox";
import Canvas from "./Canvas";
import Path from "./Path";
import { Heading, Pane, Text, Li, Ul, Popover } from "evergreen-ui";
import services from "../mock/services.json";

function App() {
  const renderContent = ({ title, desc, children }) => (
    <>
      <Heading marginBottom={8}>{title}</Heading>
      <Text>{desc}</Text>
      <Ul marginTop="16px">
        {children.map((func, idx) => (
          <Li>
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
                  <Heading marginBottom={8}>{func.desc}</Heading>
                  <Text>args: {func.args}</Text>
                  <Text>result: {func.result}</Text>
                </Pane>
              }
            >
              <Text cursor="pointer" style={{ color: "#5C85FF" }}>
                {func.title}
              </Text>
            </Popover>
          </Li>
        ))}
      </Ul>
    </>
  );
  return (
    <>
      <div className="boxes">
        {services.data.map((service, idx) => (
          <DraggableBox
            x={20 + 200 * idx}
            y={20 + 200 * idx}
            content={renderContent({
              title: service.title,
              desc: service.desc,
              children: service.children,
            })}
          />
        ))}
      </div>
      <Canvas
        curves={[new Path(22, 22, 182, 222), new Path(400, 500, 323, 434)]}
      />
    </>
  );
}

export default App;

// {"用户服务实现了用户CRUD相关的逻辑"}
