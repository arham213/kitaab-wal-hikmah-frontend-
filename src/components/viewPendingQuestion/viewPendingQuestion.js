import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";

function ViewPendingQuestion (){
    const location=useLocation();
    const id=location.state;

    const [question, setQuestion] = useState([]);
    const [answerPacket, setAnswerPacket]=useState({
        questionId:id,
        answer:''
    });
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
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{
            console.log("Error Sending the Answer:", error);
        })
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div>
            <Header/>
            <div class="card2 container">
                <div class="card">
                    <h5 class="card-header mb-2">{question.question}</h5>
                    <div class="card-body">
                        <textarea rows={10} cols={145} onChange={(e)=>setAnswerPacket({...answerPacket,answer:e.target.value})}></textarea>
                    </div>
                </div>
                <button class="btn btn-secondary mt-2" onClick={sendAnswer}>Send Answer</button>
            </div>
        </div>
    )
}

export default ViewPendingQuestion;