import { useState } from "react";
import axios from "axios";
import UserHeader from "../header/userHeader/userHeader";

const AskQuestion = ()=> {
  const [newQuestion,setNewQuestion]=useState({
    fname: '',
    lname: '',
    email: '',
    question:''
  });
  const sendQuestion = async ()=> {
    await axios.post('http://localhost:8080/askQuestion',newQuestion)
    .then(res=>{
      setNewQuestion({
        fname:'',
        lname:'',
        email:'',
        question:'',
      });
    })
    .catch (error=>{
      console.error('Error Sending the Question:',error);
    })
  }
  return (
    <div>
      <UserHeader/>
      <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="mb-2 mt-5">
                <h4 class="text-center mb-4">Ask Question</h4>
              </div>
              <div class="card border border-light-subtle rounded-4">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-1">
                          <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First Name" onChange={e=>setNewQuestion({...newQuestion,fname:e.target.value})} required></input>
                          <label for="firstName" class="form-label">First Name</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-1">
                          <input type="text" class="form-control" name="lastName" id="lastName" placeholder="First Name" onChange={e=>setNewQuestion({...newQuestion,lname:e.target.value})} required></input>
                          <label for="lastName" class="form-label">Last Name</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-1">
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" onChange={e=>setNewQuestion({...newQuestion,email:e.target.value})} required></input>
                          <label for="email" class="form-label">Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-4">
                          <input type="text" class="form-control" name="question" id="question" placeholder="Question" onChange={e=>setNewQuestion({...newQuestion,question:e.target.value})} required></input>
                          <label for="question" class="form-label">Question</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-dark btn-lg" type="submit" onClick={sendQuestion}>Send</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
}

export default AskQuestion;
