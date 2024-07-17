import './styles/Hero.css'
import heroImg from '../assets/imgs/hero-img.jpg'
import { Link } from 'react-router-dom';
function Hero(){
    return(
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h3>chicago</h3>
                <p>We are a family owned Mediterranean restaurant,
                     focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">reserve a table</Link>
            </div>
            <img src={heroImg} alt="hero-img" id='hero-img'/>
        </section>
    )
}
export default Hero;