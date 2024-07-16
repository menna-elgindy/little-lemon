import './styles/Hero.css'
import heroImg from '../assets/imgs/hero-img.jpg'
function Hero(){
    return(
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h3>chicago</h3>
                <p>We are a family owned Mediterranean restaurant,
                     focused on traditional recipes served with a modern twist.</p>
                <a href="/reservation">reserve a table</a>
            </div>
            <img src={heroImg} alt="hero-img" id='hero-img'/>
        </section>
    )
}
export default Hero;