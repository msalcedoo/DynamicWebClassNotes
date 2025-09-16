import RecipeCard from "../RecipeCard";

import { RECIPES } from './recipe-data'

const Wrapper = () => {
  return (
    <div className="recipe-list">
      {RECIPES.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}


export default Wrapper