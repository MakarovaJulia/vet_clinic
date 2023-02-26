import React, { useState } from 'react';
import styles from './index.module.sass';
import privet_logo from '../../asserts/icons/privet_logo.svg';
import {NavLink, useNavigate} from 'react-router-dom';
import { RoutesList } from '../../config/RoutesList';
import {Button} from "../ui/Button";
import {HeaderLinksBlock} from "../HeaderLinksBlock";

export const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <p className={styles.inf_text}>
                Приведённые цены и характеристики товаров и услуг носят исключительно ознакомительный характер и не являются публичной офертой.Для получения подробной информации о характеристиках товаров и услуг, их наличии и стоимости связывайтесь по телефону с администратором.
            </p>
        </div>
    )
}