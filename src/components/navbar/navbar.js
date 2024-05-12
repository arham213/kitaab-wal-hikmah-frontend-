import './navbar.css';
function Navbar1(){
  var questions;
  const getQuestions= async()=>{
    
  }
    return(
    <div>
      <div class="container">
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
                  <button type="button" class="btn btn-outline-secondary login">Login/SignUp</button>
                </li>
              </ul>
            </div>
        </nav>

        <div class="card2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Who is ALLAH?</h5>
              <p class="card-text">ALLAH is the Creator of everything.</p>
            </div>
            <div class="card-footer text-body-secondary">
              2 days ago
            </div>
          </div>
        </div>
    </div>
  </div>
)
}

export default Navbar1;