import React from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import temp_image from "../../asserts/temp_doctor_image.svg";

export const DoctorsGalleryPin= ({data}:any) => {
    return (
        <div className={styles.doctors_pin_wrapper}>
            <img className={styles.doctor_img} src={temp_image} />
            <div className={styles.doctors_service_wrapper}>
                <div className={styles.doctors_service}>
                    <h2 className={styles.title}>Имя врача</h2>
                    <Button disabled={false} theme={"tertiary"}>
                        Перейти
                    </Button>
                </div>
            </div>
        </div>
    )
}