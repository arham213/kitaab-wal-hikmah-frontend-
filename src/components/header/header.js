import userIcon from '../../assets/images/icons8-person-30.png';
import './header.css';
import { authActions } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Header(){
  const dispatch=useDispatch();
  const history=useNavigate();
  const sendLogoutRequest= async()=>{
    try{
      await axios.get('http://localhost:8080/logout');
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
    return(
      <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Kitaab wal Hikmah</h5>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
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
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
        <button class="bg-dark hamberg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="navbar-toggler-icon"></span></button>
          <a class="navbar-brand" href="#">Kitaab wal Hikmah</a>
          <div class="collapse navbar-collapse" id="exCollapsingNavbar">
            <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
              <li>
              <div class="dropdown" style={{marginLeft:900}}>
                <img class="userIcon img-fluid rounded dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" src={userIcon} alt="No Image" ></img>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                </ul>
              </div>

                {/* <div class='dropdown'>
                  <img class="userIcon img-fluid rounded" src={userIcon} alt="No Image" ></img>
                  <div class='dropdown-menu'>
                    <a class='dropdown-item' href='#'>View Profile</a>
                    <a class='dropdown-item' href='#'>Logout</a>
                  </div>
                </div> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default Header;