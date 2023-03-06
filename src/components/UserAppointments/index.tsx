import React from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import {UserAppointment} from "./UserAppoinment";

export const UserAppointments = ({data}:any) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.appointment}>
                <UserAppointment/>
            </div>
        </div>
    )
}