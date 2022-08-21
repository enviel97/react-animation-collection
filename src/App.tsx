import React from "react";
import CubeRotate from "./components/CubeRotate";
import NeonCircle from "./components/NeonCircle";
import NeonSquare from "./components/NeonSquare";
import RoundBottomFlasks from "./components/RoundBottomFlasks";

function App() {
  return (
    <div className='App'>
      <RoundBottomFlasks />
      <CubeRotate />
      <NeonSquare />
      <NeonCircle />
    </div>
  );
}

export default App;
