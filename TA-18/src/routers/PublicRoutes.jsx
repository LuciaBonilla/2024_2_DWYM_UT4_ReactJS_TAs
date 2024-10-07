import { Routes, Route, Link } from "react-router-dom"
import Login from '../routes/public-routes/Login'
import Home from '../routes/public-routes/Home'

function PublicRoutes() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>INICIO</Link></li>
                    <li><Link to={"/login"}>INICIAR SESIÓN</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    )
}

export default PublicRoutes