import {BaseLayout} from "../../components/BaseLayout";
import {observer} from "mobx-react";
import {UserPets} from "../../components/UserPets";
import {UserAppointments} from "../../components/UserAppointments";
import styles from "./index.module.sass";
import {Header} from "../../components/Header";

export const ProfilePage = observer(() => {
    return(
        <>
            <Header/>
            <div className={styles.user_info}>
                <div className={styles.name}>
                    ФИО пользователя
                </div>
                <div className={styles.contacts}>
                    Email
                    Телефон
                </div>
            </div>
            <div className={styles.user_info_wrapper}>
                <UserPets/>
                <UserAppointments/>
            </div>
        </>
    )
})