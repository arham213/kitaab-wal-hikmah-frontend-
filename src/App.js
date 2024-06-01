import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import UserLogin from './components/login/userLogin/userLogin';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import AskQuestion from './components/askQuestion/askQuestion';
import ViewQuestion from './components/viewQuestion/viewQuestion';
import ViewPendingQuestions from './components/viewPendingQuestions/viewPendingQuestions';
import ViewPendingQuestion from './components/viewPendingQuestion/viewPendingQuestion';
import AdminLogin from './components/login/adminLogin/adminLogin';

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<UserLogin/>}/>
          <Route path='/AdMiN-u-LoGiN' element={<AdminLogin/>}/>
          <Route path='/askQuestion' element={<AskQuestion/>}/>
          <Route path='/viewQuestion' element={<ViewQuestion/>}/>
          <Route path='/viewPendingQuestions' element={<ViewPendingQuestions/>}/>
          <Route path='/viewPendingQuestion' element={<ViewPendingQuestion/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
