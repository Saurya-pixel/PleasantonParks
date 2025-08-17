import { Link } from "react-router-dom";
import '../css/Navbar.css';
import logo from '../assets/city-image.jpg';
function NavBar() {
    return <nav className = "navbar">   
        <Link to="/" className="logo-link">
                <img src={logo} className="logo-img" alt="Logo" />
        </Link>
        <div className="navbar-title">
            <p>Pleasanton Parks</p>
        </div>
        <div className="navbar-links"> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Details" className="nav-link">Contact</Link>
        </div>
    </nav>
}
export default NavBar;