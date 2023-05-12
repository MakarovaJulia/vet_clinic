import React, {useEffect, useState} from "react"
import styles from "./index.module.sass";
import {DoctorsGalleryPin} from "../DoctorsGalleryPin";
import {departmentsGet} from "../../fetchData";
import {PetsGalleryPin} from "../PetsGalleryPin";

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

export const DoctorsGalleryBlock = () => {

    const [doctors, setDoctors] = useState<any>([])


    return (
        <div className={styles.doctors_gallery_wrapper}>
            <h1 className={styles.doctors_gallery_header}>Врачи</h1>
            <div className={styles.doctors_gallery}>
                {doctors && doctors.slice(0, 6).map((data: any) => (
                    <DoctorsGalleryPin data={data}/>
                ))}
            </div>
        </div>
    )
}