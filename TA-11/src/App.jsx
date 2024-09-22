import { useState } from "react";
import "./App.css";
import Timer from "./Timer.jsx";

function App() {
  const [timerIsMounted, setTimerIsMounted] = useState(true);

  function handleUnmountTimer() {
    setTimerIsMounted(false);
  }

  return (
    <>
      {timerIsMounted ? (
        <Timer unmountMe={handleUnmountTimer} />
      ) : (
        <h1>El tiempo se acabó y el timer fue desmontado!</h1>
      )}
    </>
  );
}

export default App;