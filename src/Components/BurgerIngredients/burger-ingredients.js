import React from 'react';
import {
    Tab,
    Counter,
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';

class BurgerIngredients extends React.Component {
    state = {
        currentTab: 'bun',
    };

    render() {
        const { ingredients } = this.props;

        const buns = ingredients.filter((item) => item.type === 'bun');
        const sauces = ingredients.filter((item) => item.type === 'sauce');
        const mains = ingredients.filter((item) => item.type === 'main');

        return (
            <section className={styles.section}>
                <h1 className="text text_type_main-large">Соберите бургер</h1>

                <div className={styles.tabs}>
                    <Tab value="bun" active={this.state.currentTab === 'bun'} onClick={(v) => this.setState({ currentTab: v })}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={this.state.currentTab === 'sauce'} onClick={(v) => this.setState({ currentTab: v })}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={this.state.currentTab === 'main'} onClick={(v) => this.setState({ currentTab: v })}>
                        Начинки
                    </Tab>
                </div>

                <div className={styles.scroll}>
                    <h2 className="text text_type_main-medium">Булки</h2>
                    <div className={styles.list}>
                        {buns.map((item) => (
                            <div key={item._id} className={styles.card}>
                                <img src={item.image} alt={item.name} />
                                <p className={styles.price}>
                                    {item.price} <CurrencyIcon type="primary" />
                                </p>
                                <p className={styles.name}>{item.name}</p>
                                <Counter count={1} size="default" extraClass={styles.counter} />
                            </div>
                        ))}
                    </div>

                    <h2 className="text text_type_main-medium">Соусы</h2>
                    <div className={styles.list}>
                        {sauces.map((item) => (
                            <div key={item._id} className={styles.card}>
                                <img src={item.image} alt={item.name} />
                                <p className={styles.price}>
                                    {item.price} <CurrencyIcon type="primary" />
                                </p>
                                <p className={styles.name}>{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text text_type_main-medium">Начинки</h2>
                    <div className={styles.list}>
                        {mains.map((item) => (
                            <div key={item._id} className={styles.card}>
                                <img src={item.image} alt={item.name} />
                                <p className={styles.price}>
                                    {item.price} <CurrencyIcon type="primary" />
                                </p>
                                <p className={styles.name}>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default BurgerIngredients;