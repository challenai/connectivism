import React from "react";
import "./Graph.css";
import DraggableBox from "./DraggableBox";

function App() {
  return (
    <div className="Graph">
      <DraggableBox
        x={20}
        y={20}
        title={"title"}
        content={"The quick brown fox jumps over the lazy dog"}
      />
      <DraggableBox
        x={180}
        y={220}
        title={"hello, world"}
        content={"The just jumps set the tiny cat"}
      />
    </div>
  );
}

export default App;
