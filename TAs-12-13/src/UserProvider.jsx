import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [username, setUsername] = useState("Lucía");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}