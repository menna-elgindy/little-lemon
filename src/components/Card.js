
function Card({title,price,describtion,dishImg}){
    return(
        <div className="card">
            <img src={dishImg} alt='dish img'/>
            <div>
                <h3 className="card-title">{title}</h3>
                <h3 className="price">{price}</h3>
            </div>
            <p>{describtion}</p>
            <h4>Order a delivery</h4>
           
        </div>
    )
}
export default Card;