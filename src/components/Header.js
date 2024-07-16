import "./styles/Header.css"
import Nav from "./Nav"
import logo from "../assets/imgs/logo.jpg"

function Header() {
    return (
      <header>
        <img src={logo} alt="logo" id="logo"/>
        <Nav />
      </header>
    );
} 

export default Header;
