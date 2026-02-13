import { useState } from "react";

const HotelCard = ({element, removeItem}) => {
    
    const {id, hotelName, description, image, source} = element;
    const [ showMore, setShowMore] = useState(false);
    
    return(<div>
        <div className='container' >
            <h2>{id} - {hotelName}</h2>
        </div>

        <div className='container'>
            <p>{showMore ? description : description.substring(0,180) + "..."}
                <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less": "Show more"}
                </button>
            </p> 
        </div>

        <div className='container'>
            <img src={image} width="300px"alt="hotel" />
        </div>

        <div className='container'>
            <p>Source: {source}</p>
        </div>

        <div className='container'>
            <button className='btn' onClick={() => removeItem(id)}>Remove</button>
        </div>
        </div>)
    }  

export default HotelCard;
