import React from "react"
import styles from "./index.module.sass";
import {Button} from "../../ui/Button";

export const UserAppointment = ({data}:any) => {
    return (
        <div className={styles.appointment_wrapper}>
            <div className={styles.date}>
                Дата
            </div>
            <div className={styles.doctor}>
                ФИО врача
            </div>
            <div className={styles.pet}>
                Питомец
            </div>
            <Button disabled={false} className={styles.btn}>Отменить запись</Button>
        </div>
    )
}