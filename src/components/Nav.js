import "./styles/Nav.css"
import {Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
function Nav() {
    return (
      <nav>
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><HashLink to='/#about'>About</HashLink></li>
            <li><HashLink to='/#menu'>Menu</HashLink></li>
            <li><Link to='/booking'>Reservation</Link></li>
         </ul>
      </nav>
    );
} 

export default Nav;