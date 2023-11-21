// App.js
import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import TableComponent from './TableComponent';
import DynamicTableComponent from './DynamicTableComponent';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        // Render the table components if logged in
        <>
          <TableComponent />
          <DynamicTableComponent />
        </>
      ) : (
        // Render the login component if not logged in
        <LoginComponent onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
