import React from "react"
import styles from "./index.module.sass";
import {Button} from "../../ui/Button";

export const UserPet = ({data}:any) => {
    return (
        <div className={styles.pet_wrapper}>
            <p>Имя питомца</p>
            <Button disabled={false} className={styles.btn} onClick={()=>{}}>Удалить</Button>
        </div>
)
}