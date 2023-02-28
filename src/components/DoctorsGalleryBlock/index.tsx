import React from "react"
import styles from "./index.module.sass";
import {PetsGalleryPin} from "../PetsGalleryPin";
import {Button} from "../ui/Button";
import {DoctorsGalleryPin} from "../DoctorsGalleryPin";

export const DoctorsGalleryBlock = ({data}:any) => {
    return (
        <div className={styles.doctors_gallery_wrapper}>
            <h1 className={styles.doctors_gallery_header}>Врачи</h1>
            <div className={styles.doctors_gallery}>
                <DoctorsGalleryPin/>
            </div>
        </div>
    )
}