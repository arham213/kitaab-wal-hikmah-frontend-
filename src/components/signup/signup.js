import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = ()=> {
  const history=useNavigate();
  const [newUser,setNewUser]=useState({
    fname: '',
    lname: '',
    email:'',
    password:''
  })

  const sendRequest = async () => {
    let res;
    try{
      res= await axios.post('http://localhost:8080/signup',newUser);
      //history('/login');
    } catch(error){
      return console.log(error);
    }
    return await res.data;
  }  
  const signUp = (e) => {
    e.preventDefault();
    sendRequest()
    .then(()=>history('/login', { replace: true }))
  };

  // const signUpUser = async ()=> {
  //   console.log('Signing User Up');
  //   await axios.post('http://localhost:8080/signup',newUser)
  //   .then(res=>{
  //     console.log('User Signed Up Successfully',res.data);
  //     setNewUser({
  //       fname:'',
  //       lname:'',
  //       email:'',
  //       password:'',
  //     });
  //   })
  //   .catch (error=>{
  //     console.error('Error Signing User Up:',error);
  //   })
  // }
  return (
<section class="bg-light py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div class="mb-5">
          <h4 class="text-center mb-4">Sign Up</h4>
        </div>
        <div class="card border border-light-subtle rounded-4">
          <div class="card-body p-3 p-md-4 p-xl-5">
            <form onSubmit={signUp}>
              <div class="row gy-3 overflow-hidden">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First Name" onChange={e=>setNewUser({...newUser,fname:e.target.value})} required></input>
                    <label for="firstName" class="form-label">First Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="lastName" id="lastName" placeholder="First Name" onChange={e=>setNewUser({...newUser,lname:e.target.value})} required></input>
                    <label for="lastName" class="form-label">Last Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" onChange={e=>setNewUser({...newUser,email:e.target.value})} required></input>
                    <label for="email" class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" onChange={e=>setNewUser({...newUser,password:e.target.value})} required></input>
                    <label for="password" class="form-label">Password</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required></input>
                    <label class="form-check-label text-secondary" for="iAgree">
                      I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-dark btn-lg" type="submit">Sign up</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
          <p class="m-0 text-secondary text-center">Already have an account? <a href="#" class="link-primary text-decoration-none"><Link to={'/login'}>Log in</Link></a></p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default Signup;
