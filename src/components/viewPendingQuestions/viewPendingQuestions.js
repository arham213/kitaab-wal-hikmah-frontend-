import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../header/adminHeader/adminHeader';

function ViewPendingQuestions(){
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
    //alert(questionId);
    history('/viewPendingQuestion',{state:questionId});
  }


  useEffect(() => {
    getPendingQuestions();
  }, []);

    return(
    <div>
      <div class="container col-10 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-12">
        <AdminHeader/>
        <div class="card-style">
          <h4 class="mb-4 text-center">Pending Questions</h4>
        </div>
          {pendingQuestions.length >0 ? (
            pendingQuestions.map(question=>(
                <div id={question._id} onClick={()=>handleClick(question._id)}>
                    <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{question.question}</h5>
                        <p class="card-text">{question.answer}</p>
                    </div>
                    <div class="card-footer text-body-secondary">{question.date.slice(4,15)}</div>
                    </div>
                </div>
            ))) : (
              <div style={{textAlign:'center'}} class='mt-5'>
                There are no Pending Questions right now
              </div>
            )
          }
        </div>
    </div>
)
}

export default ViewPendingQuestions;