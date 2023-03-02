import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import login_image from "../../asserts/login_image.svg";
import {NavLink} from "react-router-dom";
import {RoutesList} from "../../config/RoutesList";
import {AuthForm} from "../../components/AuthForm";

export const LoginPage = observer(() => {
    return(
        <>
            <div className={styles.content_wrapper}>
                <div className={styles.form_wrapper}>
                    <h2 className={styles.hello_text}>
                        Добро пожаловать в ПРИ<p className={styles.vet}>ВЕТ</p>
                    </h2>
                    <div className={styles.login_wrapper}>
                        <p>Еще не зарегистрированы?</p>
                        <NavLink
                            to={RoutesList.SignUpPage}
                            className={navData =>
                                navData.isActive
                                    ? styles.header_link_active
                                    : styles.header_link
                            }>
                            Зарегистрироваться
                        </NavLink>
                    </div>
                    <AuthForm/>
                </div>
                <div className={styles.image_wrapper}>
                    <img className={styles.login_image} src={login_image} />
                </div>
            </div>
        </>
    )
})