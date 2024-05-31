import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import UserLogin from './components/login/userLogin/userLogin';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import AskQuestion from './components/askQuestion/askQuestion';
import ViewQuestion from './components/viewQuestion/viewQuestion';
import PendingQuestions from './components/pendingQuestions/pendingQuestions';
import ViewPendingQuestion from './components/viewPendingQuestion/viewPendingQuestion';
import AdminLogin from './components/login/adminLogin/adminLogin';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/AdMiN-u-LoGiN' element={<AdminLogin/>}/>
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
