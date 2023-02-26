import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import login_image from "../../asserts/login_image.svg";

export const SignUpPage = observer(() => {
    return(
        <>
            <div className={styles.content_wrapper}>
                <div>Блок регистрации</div>
                <div className={styles.image_wrapper}>
                    <img className={styles.login_image} src={login_image} />
                </div>
            </div>
        </>
    )
})