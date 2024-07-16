import './styles/About.css'
import img1 from '../assets/imgs/Mario and Adrian A.jpg'
import img2 from '../assets/imgs/Mario and Adrian b.jpg'
function About(){
    return(
            <section id="about">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>chicago</h3>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, 
                        who moved to the United States to pursue their shared dream of 
                        owning a restaurant. To craft the menu, Mario relies on family 
                        recipes and his experience as a chef in Italy. Adrian does all 
                        the marketing for the restaurant and led the effort to expand the 
                        menu beyond classic Italian to incorporate additional cuisines 
                        from the Mediterranean region.</p>
                    
                </div>
                <div id="ownerImgs-container">
                    <img src={img2} alt="owners2" id='owners-img2'/>
                    <img src={img1} alt="owners1" id='owners-img1'/>
                    
                </div>
            </section>
    )
}
export default About;