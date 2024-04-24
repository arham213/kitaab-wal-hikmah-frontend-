import './Navbar1.css';
function Navbar1(){
    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
        <div class="container">
            <a class="navbar-brand" href="#">Kitaab wal Hikmah</a>
            <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                    <li>
                        <button type="button" class="btn btn-outline-secondary login">Login/SignUp</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}

export default Navbar1;