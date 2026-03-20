import { useState, useEffect } from 'react'
import './App.css'
import MyRecipeComponent from './MyRecipeComponent';

function App() {

  const MY_ID = "c97848bf"
  const MY_KEY = "6dac6e3efdf0719fe6f28b4d2cb31ded"

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [submitted, setSubmitted] = useState("pasta");

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submitted}&app_id=${MY_ID}&app_key=${MY_KEY}`,
      {
        headers: {
          "Edamam-Account-User": "student"
        }
      }
      );
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  },[submitted]);
  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }
  const searchResult = (e) => {
    e.preventDefault()
    setSubmitted(mySearch)
  }

  return (
  <div className="App">
    <div className='header'>
    <h1>Discover Delicious Recipes</h1>
    <form onSubmit={searchResult} className="searchForm">
      <input
        onChange={myRecipeSearch}
        value={mySearch}
        placeholder="Search recipes (pasta, chicken, soup...)"
      />
      <button type="submit" className="formBtn">Search</button>
    </form>
  </div>
    <div className='recipeContainer'>
    {myRecipes.map((element, index) => (
      <MyRecipeComponent 
      key={index}
      label={element.recipe.label}
      image={element.recipe.image}
      calories={element.recipe.calories}
      mealType={element.recipe.mealType}
      cuisineType={element.recipe.cuisineType}
      ingredients={element.recipe.ingredientLines}
      source={element.recipe.url}
      />
    ))}
    </div>
  </div>
  )
}

export default App
