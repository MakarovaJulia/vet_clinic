import React from "react"
import styles from "./index.module.sass";

export const DoctorsServiceList = (children:any) => {
    return (
        <div className={styles.doctors_list_wrapper}>
            <h1>Услуги данного направления</h1>
            {children}
        </div>
    )
}