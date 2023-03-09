import React, { useState } from 'react';
import styles from './index.module.sass';
import privet_logo from '../../asserts/icons/privet_logo.svg';
import profile_icon from '../../asserts/icons/profile.svg';
import {NavLink, useNavigate} from 'react-router-dom';
import { RoutesList } from '../../config/RoutesList';
import {Button} from "../ui/Button";
import {HeaderLinksBlock} from "../HeaderLinksBlock";

export const Header = () => {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false)

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
                { isAuth ?
                    <NavLink
                        to={RoutesList.ProfilePage}
                        className={navData =>
                            navData.isActive
                                ? styles.header_link_active
                                : styles.header_link
                        }>
                        <img className={styles.header_icon} src={profile_icon} />
                    </NavLink>
                    :
                    <Button disabled={false} onClick={()=>{goTo('/signup')}}>Зарегистрироваться</Button>
                }
            </div>
                <HeaderLinksBlock/>
            </div>
        </>
    );
};
