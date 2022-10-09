import { useState } from "react";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";

function App() {

  const [counter, setCounter] = useState(0)

  const plusOne = () => {
    setCounter(counter+1)
  }

  const minusOne = () => {
    setCounter(counter-1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <div className="title">
      <p>Juanpcs Counter React</p>
      </div>
      <Counter counter={counter} />
      <Buttons plusOne={plusOne} minusOne={minusOne} resetCounter={reset} />
      
    </div>
  );
}

export default App;
