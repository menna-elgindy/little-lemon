import './styles/Menu.css'
import dish1 from '../assets/imgs/greek-salad.jpg'
import dish2 from "../assets/imgs/bruchetta.png"
import dish3 from '../assets/imgs/lemon-dessert.jpg'
import Card from './Card'
import {Link} from 'react-router-dom'

function Menu(){
    const dishes =[
        {id:1,name:"Greek salad",describtion:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",dishImg:dish1, price:"$12.99"},
        {id:2,name:"Bruchetta",describtion:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",dishImg:dish2 ,price:"$ 5.99"},
        {id:3,name:"Lemon Dessert",describtion:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",dishImg:dish3, price:"$ 5.00"}
    ]

    return(
        <section id="menu">
            <div>
                <h1>Specials</h1>
                <Link to='/Menu' id='menu-btn'>Online menu</Link>
            </div>
            <div>
            {
                dishes.map((dish)=>(
                    <Card
                        key={dish.id}
                        title={dish.name}
                        price={dish.price}
                        describtion={dish.describtion}
                        dishImg={dish.dishImg}
                    />
                ))
            }
            </div>

        </section>
    )
}
export default Menu;