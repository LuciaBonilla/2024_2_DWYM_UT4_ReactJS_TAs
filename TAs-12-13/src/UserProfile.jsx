import { useUserContext } from "./UserProvider.jsx";

function UserProfile() {
    const { username } = useUserContext();

    return (
        <p>Nombre de usuario: {username}</p>
    );
}

export default UserProfile;