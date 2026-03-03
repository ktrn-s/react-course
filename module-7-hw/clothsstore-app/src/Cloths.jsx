import { Link } from "react-router-dom";

function Clothes({anyClothesItem}) {
    return (
        <div className="products">
            {anyClothesItem.map((element => {
                const {id, name, price, image, title} = element; 
                return (
                    <div  className="product-card" key={id}>
                        <img src={image} alt="cloth item" width="400px" height="500px"/>
                        
                        <div className="product-info">                            
                            <h3>{name}</h3>
                            <h4> $ {price}</h4>
                        </div> 
                        <Link to={`/about/${title}`}>
                            more details
                        </Link>
                    </div>
                )
            }))}
        </div>
    )
}
export default Clothes;