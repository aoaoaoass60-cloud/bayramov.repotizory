import React from 'react';
import {
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';

class BurgerConstructor extends React.Component {
    render() {
        const { ingredients } = this.props;
        const bun = ingredients.find((item) => item.type === 'bun');
        const otherIngredients = ingredients.filter((item) => item.type !== 'bun');

        const totalPrice =
            (bun ? bun.price * 2 : 0) +
            otherIngredients.reduce((sum, item) => sum + item.price, 0);

        return (
            <section className={styles.section}>
                {bun && (
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                )}
                <div className={styles.scroll}>
                    {otherIngredients.map((item, index) => (
                        <ConstructorElement
                            key={index}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    ))}
                </div>
                {bun && (
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                )}

                <div className={styles.total}>
                    <p className={styles.price}>
                        {totalPrice} <CurrencyIcon type="primary" />
                    </p>
                    <Button htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </section>
        );
    }
}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;