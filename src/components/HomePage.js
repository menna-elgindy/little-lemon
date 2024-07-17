import './styles/HomePage.css'
import Hero from './Hero'
import Menu from './Menu'
import About from './About'

function HomePage(){
    return(
          <main>
            <Hero/>
            <Menu/>
            <About/>
          </main>
    );
}

export default HomePage;