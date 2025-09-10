import Card from "./components/Card"
import RecipeInfo from "./components/RecipeInfo"
import './components/RecipeCard.css'
import IngredientList from "./components/IngredientList"
import InstrunctionsList from "./components/InstrunctionsList"
import RecipeImg from "./components/RecipeImage"
import { RECIPE } from './components/recipe-data'


const App = () => {
    return 
    <div>
        <Card>
            <RecipeImg imgSrc={RECIPE.imgSrc} />
            <div className="card_text">
                <RecipeInfo 
                title={RECIPE.title} 
                description={RECIPE.description}
                />
                <div className="card_lists">
                    <IngredientList data={RECIPE.ingredients}/>
                    <InstrunctionsList data={RECIPE.instructions}/>
                </div>
            </div>
        </Card>
    </div>
}

export default App

// JSX only takes one parent component, use fragmenting to bypass that if needed