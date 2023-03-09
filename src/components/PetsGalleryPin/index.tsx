import React from "react"
import styles from "./index.module.sass";
import {Link} from "react-router-dom";
import {IPetPin} from "./index.interfaces";

export const PetsGalleryPin= (props: IPetPin) => {

    const {
        id,
        department
    } = props;

    const getRandomInt = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className={styles.pets_pin_wrapper}>
            <Link className={styles.link_wrapper} to={`/service/${id}`}></Link>
                <img className={styles.pins_img} src={require('../../asserts/pets/temp_image' + getRandomInt(0,8) + '.svg')} />
                <div className={styles.pets_service_wrapper}>
                    <div className={styles.pets_service}>
                        <h1 className={styles.title}>{department}</h1>
                    </div>
                </div>
        </div>
    )
}