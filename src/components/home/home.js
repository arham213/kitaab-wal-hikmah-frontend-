import axios from 'axios';
import './home.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserHeader from '../header/userHeader/userHeader';
import HomeHeader from '../header/homeHeader/homeHeader';
import { useSelector } from 'react-redux';

function Home(){
  const [questions, setQuestions] = useState([]);
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const history=useNavigate();
  const getQuestions = async () => {
    await axios.get('http://localhost:8080/getQuestions')
    .then(res => {
      setQuestions(res.data);
    })
    .catch(error => {
        console.error('Error fetching books:', error);
    });
  };

  const handleClick=(id)=>{
    const questionId=id;
    //alert(questionId);
    history('/viewQuestion',{state:questionId});
  }


  useEffect(() => {
    getQuestions();
  }, []);

    return(
    <div>
      <div class="container col-10 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-12">
        {isLoggedIn ? <UserHeader/> : <HomeHeader/>}
        <div class="card-style "></div>
        {questions.map(question=>(
          <div id={question._id} onClick={()=>handleClick(question._id)}>
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">{question.question}</h5>
                <p class="card-text">{question.answer.slice(0,90)+" ......"}</p>
              </div>
              <div class="card-footer">{question.date.slice(4,15)}</div>
            </div>
          </div>
        ))}
    </div>
  </div>
)
}

export default Home;