import React from "react"
import styles from "./index.module.sass";
import temp_image from "../../asserts/temp_doctor_image.svg";
import {Link} from "react-router-dom";

export const DoctorsGalleryPin= ({data}:any) => {
    return (
        <div className={styles.doctors_pin_wrapper}>
            <Link className={styles.link_wrapper} to={"/doctor/1"}></Link>
            <img className={styles.doctor_img} src={temp_image} />
            <div className={styles.doctors_service_wrapper}>
                <div className={styles.doctors_service}>
                    <h2 className={styles.title}>Имя врача</h2>
                </div>
            </div>
        </div>
    )
}