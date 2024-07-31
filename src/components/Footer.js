import './styles/Footer.css'
import logo from '../assets/imgs/Logo-Footer.png'
function Footer() {
    return (
      <footer>
        <img src= {logo} alt="logo" id="footer-logo"/>
        <div>
          <h4>Contact</h4>
          <h5> address</h5>
          <h5>phone number</h5>
          <h5>email</h5>
        </div>
        <div>
          <h4>Social media links</h4>
          <h5><a href="http://facebook.com/little-lemon">facebook</a></h5>
          <h5><a href="http://instagram.com/little-lemon">instagram</a></h5>
          <h5><a href="http://twitter.com/little-lemon">twitter</a></h5>
        </div>
      </footer>
    );
} 

export default Footer;