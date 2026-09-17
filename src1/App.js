import React from 'react';
import AppHeader from './Components/AppHeader/app-header';
import BurgerIngredients from './Components/BurgerIngredients/burger-ingredients';
import BurgerConstructor from './Components/BurgerConstructor/burger-constructor';
import data from './data';
import './App.css';

class App extends React.Component {
    state = {
        selectedIngredients: [],
    };

    addIngredient = (item) => {
        this.setState({
            selectedIngredients: [...this.state.selectedIngredients, item],
        });
    };

    render() {
        return (
            <div>
                <AppHeader />
                <div className="main">
                    <BurgerIngredients
                        ingredients={data}
                        onIngredientClick={this.addIngredient}
                    />
                    <BurgerConstructor
                        ingredients={this.state.selectedIngredients}
                    />
                </div>
            </div>
        );
    }
}

export default App;