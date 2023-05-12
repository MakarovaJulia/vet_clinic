import React, {useEffect, useState} from "react"
import styles from "./index.module.sass";
import {DoctorsGalleryPin} from "../DoctorsGalleryPin";
export const DoctorsGalleryBlock = (props: any) => {

  const {doctors} = props;

    return (
        <div className={styles.doctors_gallery_wrapper}>
            <h1 className={styles.doctors_gallery_header}>Врачи</h1>
            <div className={styles.doctors_gallery}>
              {doctors?.data && doctors?.data.map((data: any) => (
                <DoctorsGalleryPin data={data}/>
              ))}
            </div>
        </div>
    )
}