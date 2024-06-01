import userIcon from '../../../assets/images/icons8-person-30.png';
import '../header.css';
import { authActions } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function HomeHeader(){
  const dispatch=useDispatch();
  const history=useNavigate();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const sendLogoutRequest= async()=>{
    try{
      await axios.get('http://localhost:8080/logout')
      .then(()=>dispatch(authActions.logout()))
      .then(()=>history('/login'))
    } catch(error){
      return console.log(error);
    }
    return;
  }

  const logout=(e)=>{
    e.preventDefault();
    sendLogoutRequest()
    .then(()=>dispatch(authActions.logout()))
    .then(()=>history('/login'));
  }

  const Login=()=>{
    history('/login');
  }

  const loginCheck=()=>{
    if(isLoggedIn){
      history('/askQuestion');
    }
    else{
      alert('Please Login first to Ask the Question');
    }
  }
    return(
      <div>
        <div class="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Kitaab wal Hikmah</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={loginCheck}>Ask Question</a>
              </li>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                < li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            {/* <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>

        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
        <button class="bg-dark hamberg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="navbar-toggler-icon"></span></button>
          <a class="navbar-brand" href="/home">Kitaab wal Hikmah</a>
          <div class="collapse navbar-collapse" id="exCollapsingNavbar">
            <ul class="nav navbar-nav nav-item me-auto flex-row  ml-auto">
              <li>
              <div class="dropdown" >
                <img class="userIcon img-fluid rounded dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" src={userIcon} alt="No Image" ></img>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#" onClick={sendLogoutRequest}>Logout</a></li>
                </ul>
              </div>

                {/* <div class='dropdown'>
                  <img class="userIcon img-fluid rounded" src={userIcon} alt="No Image" ></img>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item' href='#'>View Profile</a>
                    <a class='dropdown-item' href='#'>Logout</a>
                  </div>
                </div> */}
              {/* </li>
            </ul>
          </div>
        </nav> */} 

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
  {/* <button class="bg-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="navbar-toggler-icon"></span></button> */}
  <div class="container-fluid">
    <button class="bg-dark hamberg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="navbar-toggler-icon"></span></button>
    <a class="navbar-brand">Kitaab wal Hikmah</a>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <form class="d-flex">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button> */}
      {/* <div class="dropdown" >
        <img class="userIcon img-fluid rounded dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" src={userIcon} alt="No Image" ></img>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" onClick={sendLogoutRequest}>Logout</a></li>
        </ul>
      </div> */}
      <button class="btn btn-warning" onClick={Login}>Login/SignUp</button>
    </form>
  </div>
</nav>
      </div>
    )
}

export default HomeHeader;