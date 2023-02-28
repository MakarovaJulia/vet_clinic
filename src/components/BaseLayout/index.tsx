import React, {FC} from "react";
import styles from "./index.module.sass";
import {Header} from "../Header";
import {Footer} from "../Footer";

export interface IBaseLayout {
    children?: React.ReactNode
}

export const BaseLayout: FC<IBaseLayout> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Header />
            </header>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    )
}
