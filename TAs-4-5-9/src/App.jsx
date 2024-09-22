import { useState, useEffect } from 'react';
import './App.css';
import './Button.jsx'
import Button from './Button.jsx';
import ToggleButton from './ToggleButton.jsx';

// TA 4, 5 y 9
function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const textValue = "Hola, Mundo";
  const [isTextHide, setIsTextHide] = useState(false);

  function handleShowAndHideText() {
    setIsTextHide(isTextHide ? false : true);
  }

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <>
      <h1>Contador: {count}</h1>
      <Button onClick={handleIncrement} actionName={"INCREMENTAR"} />
      <Button onClick={handleDecrement} actionName={"DECREMENTAR"} />
      <ToggleButton onClick={handleShowAndHideText} />
      <p>{isTextHide ? null : textValue}</p>
    </>
  )
}

export default App;