import React from "react";
import Draggable from "react-draggable";
import { Heading, Pane, Text, Li, Ul, Popover, Strong } from "evergreen-ui";
import "./DraggableBox.css";

function DraggableBox({ x, y, content }) {
  return (
    <Draggable
      // handle=".handle"
      defaultPosition={{ x, y }}
      position={null}
      scale={1}
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
      >
        {content}
      </Pane>
    </Draggable>
  );
}

export default DraggableBox;
