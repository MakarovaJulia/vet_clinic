import React from "react"
import styles from "./index.module.sass";
import {PetsGalleryPin} from "../PetsGalleryPin";
import {Button} from "../ui/Button";

export const PetsGalleryBlock = ({data}:any) => {
    return (
        <div className={styles.pets_gallery_wrapper}>
            <h1 className={styles.pins_gallery_header}>Услуги</h1>
            <div className={styles.pets_gallery}>
                <PetsGalleryPin/>
            </div>
        </div>
    )
}