import Nav from "./Nav"
import logo from "../assets/imgs/logo.jpg"

function Header() {
    return (
      <>
        <img src={logo} alt="logo"/>
        <Nav />
      </>
    );
} 

export default Header;
