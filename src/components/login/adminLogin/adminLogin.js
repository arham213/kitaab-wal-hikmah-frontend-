import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { authActions } from "../../../store/store";

function AdminLogin(){
  const dispatch=useDispatch();
  const history=useNavigate();
  const [userCredentials, setUserCredentials]=useState({
    email:'',
    password:''
  });

  const sendLoginRequest= async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:8080/adminlogin', userCredentials)
    .then(()=>dispatch(authActions.login))
    .then(()=>history('/viewPendingQuestions',{replace:true}))
    .catch(error=>{console.log(error)})
    // let res;
    // try{
    //   res=await axios.post('http://localhost:8080/adminlogin',userCredentials);
    // } catch(error){
    //   return console.log(error);
    // }
    // return await res.data;
  }

  const loginUser=(e)=>{
    e.preventDefault();
    sendLoginRequest()
    .then(()=>dispatch(authActions.login()))
    .then(()=>history('/viewPendingQuestions',{replace:true}));
  }
    return(
        <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="mb-5">
                <h4 class="text-center mb-4">Admin Login</h4>
              </div>
              <div class="card border border-light-subtle rounded-4">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" onChange={e=>setUserCredentials({...userCredentials,email:e.target.value})} required></input>
                          <label for="email" class="form-label">Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={e=>setUserCredentials({...userCredentials,password:e.target.value})} required></input>
                          <label for="password" class="form-label">Password</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-primary btn-lg" type="submit" onClick={sendLoginRequest}>Login</button>
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
    )
}

export default AdminLogin;