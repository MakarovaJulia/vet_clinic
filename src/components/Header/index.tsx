import React, { useState } from 'react';
import styles from './index.module.sass';
import privet_logo from '../../asserts/icons/privet_logo.svg';
import {NavLink, useNavigate} from 'react-router-dom';
import { RoutesList } from '../../config/RoutesList';
import {Button} from "../ui/Button";

export const Header = () => {

    const navigate = useNavigate();

    const goTo = (link:string): void => {
        navigate(link)
    }

    return (
        <>
            <div className={styles.header_container}>
            <div className={styles.header_wrapper}>
                <NavLink
                    to={RoutesList.MainPage}
                    className={navData =>
                        navData.isActive
                            ? styles.header_link_active
                            : styles.header_link
                    }>
                    <img className={styles.header_icon} src={privet_logo} />
                </NavLink>
                <p>Мы работаем круглосуточно<br/> без ночного тарифа</p>
                <p>Кремлевская ул. 35 Казань</p>
                <p>+79061171472</p>
                <Button disabled={false} onClick={()=>{goTo('/signup')}}>Зарегистрироваться</Button>
            </div>
            </div>
        </>
    );
};
