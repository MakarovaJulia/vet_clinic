import React from "react"
import styles from "./index.module.sass";
import {Link} from "react-router-dom";
import {IPetPin} from "./index.interfaces";

export const PetsGalleryPin = ({data}: any) => {


    const getRandomInt = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

     console.log(data)

    return (
        <div className={styles.pets_pin_wrapper}>
            <Link className={styles.link_wrapper} to={`/department/${data?.id}`}></Link>
                <img className={styles.pins_img} src={require('../../asserts/pets/temp_image' + getRandomInt(0,8) + '.svg')} />
                <div className={styles.pets_service_wrapper}>
                    <div className={styles.pets_service}>
                        <h1 className={styles.title}>{data?.name}</h1>
                    </div>
                    <div className={styles.count}>
                        <p className={styles.count_text}>{data?.count} услуг</p>
                    </div>
                </div>
        </div>
    )
}