import axios from 'axios';
import './home.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../header/header';
function Home(){
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    await axios.get('http://localhost:8080/getQuestions')
    .then(response => {
      setQuestions(response.data);
    })
    .catch(error => {
        console.error('Error fetching books:', error);
    });
};


  useEffect(() => {
    getQuestions();
  }, []);

    return(
    <div>
      <div class="container">
        <Header/>
        <div class="card2"></div>
        {questions.map(question=>(
          <div>
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

export default Home;