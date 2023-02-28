import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import login_image from "../../asserts/login_image.svg";
import {NavLink} from "react-router-dom";
import {RoutesList} from "../../config/RoutesList";

export const SignUpPage = observer(() => {
    return(
        <>
            <div className={styles.content_wrapper}>
                <div className={styles.form_wrapper}>
                    <h2 className={styles.hello_text}>
                        Добро пожаловать в ПРИ<p className={styles.vet}>ВЕТ</p>
                    </h2>
                    <div className={styles.login_wrapper}>
                    <p>Уже есть аккаунт?</p>
                    <NavLink
                        to={RoutesList.MainPage}
                        className={navData =>
                            navData.isActive
                                ? styles.header_link_active
                                : styles.header_link
                        }>
                        Войти
                    </NavLink>
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <img className={styles.login_image} src={login_image} />
                </div>
            </div>
        </>
    )
})