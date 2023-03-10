import React from "react"
import styles from "./index.module.sass";
import {DoctorsGalleryPin} from "../DoctorsGalleryPin";

interface IDoctorItem {
    id: number,
    first_name: string;
    last_name: string;
    middle_name: string;
    photo_id: number;
}

interface IDoctorItems {
    doctorItems:IDoctorItem[];
}

export const DoctorsGalleryBlock = (props: IDoctorItems) => {

    const {doctorItems} = props;

    const getPins = (mapItems: IDoctorItem[]) => {
        const cards = [];
        for (let item of mapItems) {
            if (item.id < 3){
                cards.push(
                    <DoctorsGalleryPin
                        first_name={item.first_name}
                        last_name={item.last_name}
                        middle_name={item.middle_name}
                        id={item.id}
                        photo_id={item.photo_id}/>
                )
            }
            else break
        }
        return cards;
    }

    return (
        <div className={styles.doctors_gallery_wrapper}>
            <h1 className={styles.doctors_gallery_header}>Врачи</h1>
            <div className={styles.doctors_gallery}>
                {getPins(doctorItems)}
            </div>
        </div>
    )
}