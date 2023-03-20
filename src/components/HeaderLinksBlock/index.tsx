import React, { useState } from 'react';
import styles from '../Header/index.module.sass';
import privet_logo from '../../asserts/icons/privet_logo.svg';
import {NavLink, useNavigate} from 'react-router-dom';
import { RoutesList } from '../../config/RoutesList';

export const HeaderLinksBlock = () => {

    const navigate = useNavigate();

    const goTo = (link:string): void => {
        navigate(link)
    }

    return (
        <>
            <div className={styles.header_wrapper}>
                <NavLink
                    to='/'
                    className={navData =>
                        navData.isActive
                            ? styles.header_link_active
                            : styles.header_link
                }>
                    О клинике
                </NavLink>
                <NavLink
                    to='/'
                    className={navData =>
                        navData.isActive
                            ? styles.header_link_active
                            : styles.header_link
                    }>
                    О клинике
                </NavLink>
                <NavLink
                    to='/'
                    className={navData =>
                        navData.isActive
                            ? styles.header_link_active
                            : styles.header_link
                    }>
                    О клинике
                </NavLink>
                <NavLink
                    to='/'
                    className={navData =>
                        navData.isActive
                            ? styles.header_link_active
                            : styles.header_link
                    }>
                    О клинике
                </NavLink>
                <NavLink
                    to='/'
                    className={navData =>
                        navData.isActive
                            ? styles.header_link_active
                            : styles.header_link
                    }>
                    О клинике
                </NavLink>
            </div>
        </>
    );
};
