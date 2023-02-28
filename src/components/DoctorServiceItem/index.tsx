import React from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import temp_image from "../../asserts/temp_doctor_image.svg";

export const DoctorsServiceItem = ({data}:any) => {
    return (
        <div className={styles.doctors_item_wrapper}>
            <div className={styles.item_container}>
                <h3>Название услуги</h3>
                <div className={styles.price_container}>
                    <p className={styles.price}>Цена Р</p>
                    <Button disabled={false} theme="primary">Записаться на прием</Button>
                </div>
            </div>
        </div>
    )
}