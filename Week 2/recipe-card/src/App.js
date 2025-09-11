import Card from "./components/Card"
import RecipeInfo from "./components/RecipeInfo"
import IngredientList from "./components/IngredientList"
import InstructionsList from "./components/InstrunctionsList"
import RecipeImg from "./components/RecipeImage"
import './components/RecipeCard.css'

import { RECIPE } from './components/recipe-data'


const App = () => {
    return (
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
                        <InstructionsList data={RECIPE.instructions}/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default App

// JSX only takes one parent component, use fragmenting to bypass that if needed