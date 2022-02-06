import React from "react";
import DraggableBox from "./DraggableBox";

function App() {
  return (
    <DraggableBox
      x={20}
      y={20}
      title={"Service:User"}
      content={"用户服务实现了用户CRUD相关的逻辑"}
    />
  );
}

export default App;
