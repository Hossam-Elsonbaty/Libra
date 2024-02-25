import React from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Settings from './Pages/Settings';
import Transaction from './Pages/Transaction';
import {AuthProvider} from './Context/Auth'
function App() {
  return (
    <>
      <a hidden href="https://storyset.com/phone">Phone illustrations by Storyset</a>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='sign-up' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='/' element={<Settings />} />
            <Route path='transaction' element={<Transaction />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
