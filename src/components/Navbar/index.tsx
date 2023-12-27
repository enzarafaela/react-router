import { NavLink } from "react-router-dom";
import './Navbar.css';

function NavBar() {
    return (
       <nav>
        <NavLink to="/">Home</NavLink>
        {' '}
        <NavLink to="/coffees">Coffee List</NavLink>
       </nav>   
    );
}

export default NavBar;