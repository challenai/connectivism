import React from "react";
import Canvas from "./Canvas";
import Path from "./Path";

function App() {
  return (
    <Canvas curves={[new Path(20, 20, 80, 78), new Path(40, 50, 323, 434)]} />
  );
}

export default App;
