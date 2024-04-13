import React from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Settings from './Pages/Settings';
import Transaction from './Pages/Transaction';
import {AuthProvider} from './Context/Auth'
import {ScanProvider} from './Context/Scan'
import PrivateRoutes from './Context/PrivateRoutes';

function App() {
  return (
    <>
      <a hidden href="https://storyset.com/phone">Phone illustrations by Storyset</a>
      <Router>
        <AuthProvider>
          <ScanProvider>
            <Routes>
              {/* <Route element={<PrivateRoutes/>}>
                <Route path='transaction' exact element={<Transaction />} />
                <Route path='/' exact element={<Settings />} />
              </Route> */}
              <Route path='transaction' exact element={<Transaction />} />
              <Route path='/' exact element={<Settings />} />
              <Route path='sign-up' exact element={<SignUp />} />
              <Route path='login' exact element={<Login />} />
            </Routes>
          </ScanProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
