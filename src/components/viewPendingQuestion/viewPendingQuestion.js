import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminHeader from '../header/adminHeader/adminHeader';
import './viewPendingQuestion.css';

function ViewPendingQuestion (){
    const location=useLocation();
    const id=location.state;

    const [question, setQuestion] = useState([]);
    const [answerPacket, setAnswerPacket]=useState({
        questionId:id,
        answer:''
    });
    const history=useNavigate();
    const getQuestion = async () => {
        await axios.get('http://localhost:8080/getQuestion/'+id)
        .then(res => {
            setQuestion(res.data);
            console.log(question);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
    };

    const sendAnswer= async()=>{
        await axios.put('http://localhost:8080/sendAnswer',answerPacket)
        .then(()=>{history('/viewPendingQuestions')})
        .catch(error=>{
            console.log("Error Sending the Answer:", error);
        })
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div>
            <AdminHeader/>
            <div class="card-style container col-10 col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxl-12">
                <div class="card">
                    <h5 class="card-header">{question.question}</h5>
                    <textarea rows={13} cols={115} onChange={(e)=>setAnswerPacket({...answerPacket,answer:e.target.value})}></textarea>
                    {/* <div class="card-body">
                        <textarea rows={10} cols={115} onChange={(e)=>setAnswerPacket({...answerPacket,answer:e.target.value})}></textarea>
                    </div> */}
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-dark btn-lg" onClick={sendAnswer}>Send Answer</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPendingQuestion;