import './App.css';
import React from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import AskQuestion from './components/askQuestion/askQuestion';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ViewQuestion from './components/viewQuestion/viewQuestion';
import PendingQuestions from './components/pendingQuestions/pendingQuestions';
import ViewPendingQuestion from './components/viewPendingQuestion/viewPendingQuestion';
import Leaderboard from './leaderboad';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path='/' element={<Leaderboard/>}/>
          <Route path='/login' element={<Login/>}/>
          {isLoggedIn && <Route path='/home' element={<Home/>}/>}{" "}
          <Route path='/askQuestion' element={<AskQuestion/>}/>
          <Route path='/viewQuestion' element={<ViewQuestion/>}/>
          <Route path='/viewPendingQuestions' element={<PendingQuestions/>}/>
          <Route path='/viewPendingQuestion' element={<ViewPendingQuestion/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
