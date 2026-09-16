import AppHeader from './Components/AppHeader/app-header';
import BurgerIngredients from './Components/BurgerIngredients/burger-ingredients';
import data from './data';
import './App.css';

function App() {
    return (
        <div>
            <AppHeader />
            <BurgerIngredients ingredients={data} />
        </div>
    );
}

export default App;