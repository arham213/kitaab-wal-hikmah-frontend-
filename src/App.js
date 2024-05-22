import './App.css';
import React from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import AskQuestion from './components/askQuestion/askQuestion';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          {isLoggedIn && <Route path='/home' element={<Home/>}/>}{" "}
          <Route path='/askQuestion' element={<AskQuestion/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
