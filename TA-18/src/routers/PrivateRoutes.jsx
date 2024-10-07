import { Routes, Route, Link, useNavigate } from "react-router-dom"
import UltraSecretPhoto from '../routes/private-routes/UltraSecretPhoto'
import { useAuthContext } from "../AuthContextProvider"

function PrivateRoutes() {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/secret"}>FOTO SECRETA</Link></li>
                    <li><Link to={"/"}>INICIO</Link></li>
                    <li>
                        <button onClick={() => {
                            logout();
                            navigate("/");
                        }}>Cerrar sesión</button>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<h1>Hola, Mundo.</h1>} />
                <Route path="/secret" element={<UltraSecretPhoto />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    )
}

export default PrivateRoutes