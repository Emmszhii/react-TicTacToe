import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [active, setActive] = useState(false);

  const clickHandler = (e) => {
    const id = e.currentTarget.id;
    const box = e.currentTarget;
    box.innerText === "X" ? (box.innerText = "") : (box.innerText = "X");
  };

  return (
    <div className="app">
      <div className="app-group"> 
        <div className="row-box">
          <Box clickHandler={clickHandler} id={0} />
          <Box clickHandler={clickHandler} id={1} />
          <Box clickHandler={clickHandler} id={2} />
        </div>
        <div className="row-box">
          <Box clickHandler={clickHandler} id={3} />
          <Box clickHandler={clickHandler} id={4} />
          <Box clickHandler={clickHandler} id={5} />
        </div>
        <div className="row-box">
          <Box clickHandler={clickHandler} id={6} />
          <Box clickHandler={clickHandler} id={7} />
          <Box clickHandler={clickHandler} id={8} />
        </div>
      </div>
    </div>
  );
}

export default App;
