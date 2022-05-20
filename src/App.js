import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Home from './components/Home';
import Main from './components/Main';
import PrivateRoute from './components/ProtectRouting';
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/main' element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;