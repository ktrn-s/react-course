import { useState } from "react";

const HandleList = ({element, removeItem, index}) => {
    const {id, name, description, image} = element; 
    const [showMore, setShowMore] = useState(false);

    return (
        <div >
            <div>
                <h3>{index + 1}. {name}</h3>
            </div>
            <div className="descriptionBox">
                <div>
                    <img src={image} alt="photo" width="150px"/>
                </div>
                <div>
                    <p>
                        {showMore ? description: description.substring(0, 195) + "..."}
                        <button className="showBtn" onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </p>
                </div>
            </div>
            <div className="box">
                <button className="removeItemBtn" onClick={() => removeItem(id)}>Remove</button>
            </div>
        </div>
    )
}

export default HandleList;