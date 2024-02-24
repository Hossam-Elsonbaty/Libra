import React from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Settings from './Pages/Settings';
function App() {
  return (
    <>
      <a hidden href="https://storyset.com/phone">Phone illustrations by Storyset</a>
      <Router>
        <Routes>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
