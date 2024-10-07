import { useState } from "react"
import { useAuthContext } from "../../AuthContextProvider";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthContext();

    function handleLogin(e) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <form onSubmit={handleLogin}>
            <label>
                USUARIO
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </label>

            <label>
                CONTRASEÑA
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>

            <input type="submit" value="INICIAR SESIÓN" />
        </form>
    );
}

export default Login