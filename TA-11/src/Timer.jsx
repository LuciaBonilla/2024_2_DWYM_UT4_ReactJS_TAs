import { useEffect } from "react";
import { useState } from "react";

function Timer({ unmountMe }) {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const timerID = setInterval(() => {
            console.log("segundo:", seconds);
            setSeconds(prev => prev - 1);
        }, 1000);

        if (seconds <= 0) {
            clearInterval(timerID);  // Cancela la acción del timer.
            return unmountMe();      // Le indica a App que lo desmonte.
        }

        // Cancela la acción del timer al desmontar.
        return () => clearInterval(timerID); // Sólo ejecuta el return al desmontar.
        // También ejecuta el return si el componente se re renderiza (ya que desmonta y vuelve a montar).
    }, [seconds]); // useEffect se ejecuta cada vez que cambia seconds.

    return (
        <h1>Cuenta regresiva: {seconds} segundos</h1>
    );
}

export default Timer;