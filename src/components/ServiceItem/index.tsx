import React from "react"
import styles from "./index.module.sass";
import {IServiceItem} from "./index.interfaces";

export const ServiceItem = (props: IServiceItem) => {
    return (
        <div className={styles.doctors_item_wrapper}>
            <div className={styles.item_container}>
                <h4>{props.title}</h4>
                <div className={styles.price_container}>
                    <p className={styles.price}>{props.price} Р</p>
                </div>
            </div>
        </div>
    )
}