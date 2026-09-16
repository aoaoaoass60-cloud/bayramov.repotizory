import React from 'react';
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

class AppHeader extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.link}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default ml-2">Конструктор</p>
                    </div>
                    <div className={styles.link}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default ml-2 text text_color_inactive">Лента заказов</p>
                    </div>
                </nav>

                <div className={styles.logo}>
                    <Logo />
                </div>

                <div className={styles.link}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default ml-2 text text_color_inactive">Личный кабинет</p>
                </div>
            </header>
        );
    }
}

export default AppHeader;