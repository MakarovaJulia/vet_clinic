import React from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import temp_image from "../../asserts/temp_doctor_image.svg";
import {ServiceItem} from "../ServiceItem";

export const DoctorsServiceList = ({data}:any) => {
    return (
        <div className={styles.doctors_list_wrapper}>
            <h1>Услуги данного направления</h1>
        </div>
    )
}