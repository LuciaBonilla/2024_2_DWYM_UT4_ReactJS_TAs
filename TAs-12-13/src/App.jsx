import React from 'react';
import { UserProvider } from './UserProvider.jsx';
import UserProfile from './UserProfile.jsx';
import Input from './Input.jsx';

function App() {
  return (
    <UserProvider>
      <h1>¡Bienvenido a la aplicación!</h1>
      <UserProfile />
      <Input />
    </UserProvider>
  );
};

export default App;