import { useUserContext } from "./UserProvider";

function Input() {
    const {username, setUsername} = useUserContext();

    return (
        <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="Nombre de usuario" value={username}/>
    );
}

export default Input;