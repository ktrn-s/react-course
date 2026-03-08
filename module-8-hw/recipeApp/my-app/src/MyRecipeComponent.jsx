import check from './assets/check.png'

function MyRecipeComponent({label, image, calories, ingredients 

}) {
    return(<div>
        <div className="recipeCard">
            <h2>{label}</h2>
            <img src={image} alt="photo of food"  width="300px"/>

        <ul className=" list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src={check} alt="check"  width="30px"/>
                    {ingredient} 
                </li>
            ))}
        </ul>
            <p>{calories.toFixed()} calories</p>  
    </div>              
    </div>
    )
}

export default MyRecipeComponent;