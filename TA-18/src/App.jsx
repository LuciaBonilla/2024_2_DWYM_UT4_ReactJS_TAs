import './App.css'
import { useState, useEffect } from "react"
import { useAuthContext } from './AuthContextProvider' // La contraseña y usuario están en AuthContextProvider.
import PrivateRoutes from './routers/PrivateRoutes';
import PublicRoutes from './routers/PublicRoutes';

function App() {
  const { isAuthorizated } = useAuthContext(); // En main.jsx, App está encerrado por AuthContextProvider.
  const [arePrivateRoutesActive, setArePrivateRoutesActive] = useState(false);

  useEffect(() => {
    if (isAuthorizated) {
      setArePrivateRoutesActive(true);
    } else {
      setArePrivateRoutesActive(false);
    }
  }, [isAuthorizated]);

  return (
    <>
      {arePrivateRoutesActive ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  )
}

export default App
