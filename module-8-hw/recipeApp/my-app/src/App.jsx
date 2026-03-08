import { useState, useEffect } from 'react'
import './App.css'
import MyRecipeComponent from './MyRecipeComponent'

function App() {
  const MY_ID = import.meta.env.VITE_APP_ID;
  const MY_KEY = import.meta.env.VITE_APP_KEY;

  const videoURL ="https://files.cdn.thinkific.com/file_uploads/397660/attachments/90d/92f/4be/food.mp4"

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipe = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }
  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className='App'>
    <div className='header'>
        <video autoPlay muted loop>
          <source src={videoURL} type="video/mp4"/>
        </video>

          <div className="headerContent">
            
            <h1>Find a Recipe</h1>
            <form onSubmit={finalSearch}>
              <input className='search' onChange={myRecipeSearch} value={mySearch}/>
            </form>
            <button onClick={finalSearch}>
              <img src="https://img.icons8.com/fluency/48/000000/fry.png " alt="" />
            </button>
          </div>
      </div>
  <div className='recipeContainer'>
    {myRecipes.map((element, index) => (
            <MyRecipeComponent key={index}
            label={element.recipe.label} 
            image={element.recipe.image} 
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
            />
    ))}
  </div>
    </div>
  )
}

export default App
