import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
function PendingQuestions(){
  const [pendingQuestions, setPendingQuestions] = useState([]);
  const history=useNavigate();

  const getPendingQuestions = async () => {
    await axios.get('http://localhost:8080/getPendingQuestions')
    .then(res => {
      setPendingQuestions(res.data);
    })
    .catch(error => {
        console.error('Error fetching books:', error);
    });
  };

  const handleClick=(id)=>{
    const questionId=id;
    alert(questionId);
    history('/viewPendingQuestion',{state:questionId});
  }


  useEffect(() => {
    getPendingQuestions();
  }, []);

    return(
    <div>
      <div class="container">
        <Header/>
        <div class="card2"></div>
            {pendingQuestions.map(question=>(
                <div id={question._id} onClick={()=>handleClick(question._id)}>
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{question.question}</h5>
                        <p class="card-text">{question.answer}</p>
                    </div>
                    <div class="card-footer text-body-secondary">{question.date}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}

export default PendingQuestions;