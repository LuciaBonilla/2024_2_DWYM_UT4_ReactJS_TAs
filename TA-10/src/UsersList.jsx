import React, { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);

    // useEffect para hacer la llamada a la API cuando el componente se renderiza por primera vez.
    useEffect(() => {
        // Función asíncrona para obtener los usuarios.
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error al obtener los usuarios: ", error);
            }
        };

        fetchUsers();
    }, []); // El arreglo vacío asegura que se ejecute solo una vez cuando el componente se monta.

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>Nombre:</strong> {user.username}<br />
                        <strong>Email:</strong> {user.email}<br />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UsersList;