import React from "react";
import {observer} from "mobx-react";
import {ServiceItem} from "../../components/ServiceItem";
import {Header} from "../../components/Header";
import styles from "./index.module.sass";

export const ServicePage = observer(() => {
    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <h1>Название</h1>
                <div className={styles.items_wrapper}>
                    <ServiceItem/>
                </div>
            </div>
        </>
    )
})