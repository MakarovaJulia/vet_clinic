import React from "react"
import styles from "./index.module.sass";
import {Link} from "react-router-dom";
import {IDoctorPin} from "./index.interfaces";

export const DoctorsGalleryPin= (props: IDoctorPin) => {

    const {
        id,
        first_name,
        last_name,
        middle_name,
        photo_id
    } = props;

    return (
        <div className={styles.doctors_pin_wrapper}>
            <Link className={styles.link_wrapper} to={`/doctor/${id}`}></Link>
            <img className={styles.doctor_img} src={require('../../asserts/doctors/temp_doctor_image' + photo_id + '.svg')} />
            <div className={styles.doctors_service_wrapper}>
                <div className={styles.doctors_service}>
                    <h2 className={styles.title}>{last_name} {first_name} {middle_name}</h2>
                </div>
            </div>
        </div>
    )
}