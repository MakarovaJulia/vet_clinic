import {observer} from "mobx-react";
import {UserPets} from "../../components/UserPets";
import {UserAppointments} from "../../components/UserAppointments";
import styles from "./index.module.sass";
import {Header} from "../../components/Header";
import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../components/ui/Button";

interface IAccountData {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    password: string
}

export const ProfilePage = observer(() => {

    const showData = () =>{
        alert(localStorage.getItem("user"))
    }

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
                <Button disabled={false} onClick={showData}>Выйти</Button>
            </div>
            <div className={styles.user_info_wrapper}>
                <UserPets/>
                <UserAppointments/>
            </div>
        </>
    )
})