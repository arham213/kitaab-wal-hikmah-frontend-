import './App.css';
import React from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          {isLoggedIn && <Route path='/home' element={<Navbar/>}></Route>}{" "}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
