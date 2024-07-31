import './styles/Card.css'
function Card({title,price,describtion,dishImg}){
    return(
        <div className="card">
            <img src= {dishImg} alt='dish img' className="card-img"/>
            <div className='card-content'>
                <h3 className="card-title">{title} <span className="price">{price}</span></h3>
                <p>{describtion}</p>
                <h4>Order a delivery</h4>
            </div>

           
        </div>
    )
}
export default Card;