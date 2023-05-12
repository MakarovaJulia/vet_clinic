import React from "react"
import styles from "./index.module.sass";
import {Link} from "react-router-dom";

export const DoctorsGalleryPin= ({data}: any) => {

    return (
        <div className={styles.doctors_pin_wrapper}>
            <Link className={styles.link_wrapper} to={`/doctor/${data?.id}`}></Link>
            <img className={styles.doctor_img} src={require('../../asserts/doctors/temp_doctor_image' + '.svg')} />
            <div className={styles.doctors_service_wrapper}>
                <div className={styles.doctors_service}>
                    <h2 className={styles.title}>{data?.lastName} {data?.middleName} {data?.firstName}</h2>
                </div>
            </div>
        </div>
    )
}