// LoginComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check user and password against the API
    axios.get(`https://corenet.usadi.co.id/BaseAPI/User?user=${username}&password=${password}`)
      .then(response => {
        if (response.data.success) {
          // If login is successful, invoke the onLogin callback
          onLogin();
        } else {
          console.log('Login failed');
        }
      })
      .catch(error => console.error('Error logging in:', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
