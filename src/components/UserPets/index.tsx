import React from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import {UserPet} from "./UserPet";

export const UserPets = ({data}:any) => {
    return (
        <div className={styles.pets_wrapper}>
            <div className={styles.pets}>
                <UserPet/>
            </div>
            <Button disabled={false} onClick={()=>{}}>Добавить питомца</Button>
        </div>
    )
}