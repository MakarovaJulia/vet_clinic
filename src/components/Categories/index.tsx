import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import login_image from "../../asserts/login_image.svg";
import {NavLink} from "react-router-dom";
import {RoutesList} from "../../config/RoutesList";

export const Categories = () => {
    return (
        <div className={styles.categories_wrapper}>
            <p>Категория</p>
            <p>Категория</p>
        </div>
    )
}