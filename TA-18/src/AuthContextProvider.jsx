import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const authInfo = {
        username: "admin",
        password: "123"
    }

    const [isAuthorizated, setIsAuthorizated] = useState(false);
    const navigate = useNavigate();

    function login(username, password) {
        if (authInfo.username === username && authInfo.password === password) {
            setIsAuthorizated(true);
            alert("Autorizado");
            navigate("/");
        } else {
            setIsAuthorizated(false);
            alert("No Autorizado");
        }
    }

    function logout() {
        setIsAuthorizated(false);
    }

    return (
        <AuthContext.Provider value={{ login, logout, isAuthorizated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}