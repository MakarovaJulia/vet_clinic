import React from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import temp_image from "../../asserts/temp_image.svg";

export const PetsGalleryPin= ({data}:any) => {
    return (
        <div className={styles.pets_pin_wrapper}>
            <img className={styles.pins_img} src={temp_image} />
            <div className={styles.pets_service_wrapper}>
                <div className={styles.pets_service}>
                    <h1 className={styles.title}>Название</h1>
                    <Button disabled={false} theme={"tertiary"}>
                        услуга
                    </Button>
                </div>
            </div>
        </div>
    )
}