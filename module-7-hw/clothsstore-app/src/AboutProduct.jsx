import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

const AboutProduct = () => {
    const navigate = useNavigate();
    const { title } = useParams();

    const product = data.find(product => product.title === title);

    return (
        <div>
            <h3>{product.name} </h3>
            <img src={product.image} alt={product.name} />

            <button onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}

export default AboutProduct;