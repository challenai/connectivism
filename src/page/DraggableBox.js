import React from "react";
import Draggable from "react-draggable";
import { Heading, Pane, Text } from "evergreen-ui";
import "./DraggableBox.css";

function DraggableBox({ x, y, title, content }) {
  return (
    <Draggable
      // handle=".handle"
      defaultPosition={{ x, y }}
      position={null}
      scale={1}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      // onStop={this.handleStop}
    >
      <Pane
        is="section"
        ref={(ref) => console.log(ref)}
        border="muted"
        borderRadius={6}
        paddingY={24}
        paddingX={24}
        width={240}
        cursor="grabbing"
        className="box"
        position="absolute"
        backgroundColor="#fff"
        // onClick={() => alert("Works just like expected")}
      >
        <Heading marginBottom={8}>{title}</Heading>
        <Text>{content}</Text>
      </Pane>
    </Draggable>
  );
}

export default DraggableBox;
