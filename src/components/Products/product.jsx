import { Link } from "react-router-dom"

const Product = (props) => {
  return (
    <div>
         <h2>{props.title}</h2>
               <img src={props.img}/>
               <div>
               Original Price: {props.price} <br/>
               Discount Price {props.discount} <br/>
               </div>
               <div>
                <Link to={`../details/${props.id}`} className="btn"style={{backgroundColor:'yellow'}}> Detail</Link> 
                <button className="btn">Buy</button>
               </div>
    </div>
  )
}

export default Product