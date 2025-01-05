import React from 'react';
import Home from './pages/home';
import Watch from './pages/watch';
import Register from './pages/register';
import Login from './pages/login';

const App = () => {
  return (
    <div>
      <Register />
      <Login />
      <Home/>
    </div>
  );
};

export default App;
