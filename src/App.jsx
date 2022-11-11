import "./assets/styles/App.css";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const handleReset = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <Header />
      <Counter numClick={numClicks} />
      <Button text={"Click"} isButtonClick={true} handleClick={handleClick} />
      <Button text={"Reset"} isButtonClick={false} handleClick={handleReset} />
    </div>
  );
}

export default App;
