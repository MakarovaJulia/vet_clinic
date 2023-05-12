import React, {useEffect, useState} from "react"
import styles from "./index.module.sass";
import {Link} from "react-router-dom";
import {doctorPhotoGet} from "../../fetchData";

export const DoctorsGalleryPin = ({data}: any) => {

  const [photo, setPhoto] = useState<any>(null)

  useEffect(()=>{
    if(data?.photoId){
      doctorPhotoGet(data?.photoId).then((data) => setPhoto(data))
    }
  }, [data?.photoId])

  console.log(photo)

    return (
        <div className={styles.doctors_pin_wrapper}>
            <Link className={styles.link_wrapper} to={`/doctor/${data?.id}`}></Link>
            <img className={styles.doctor_img} src={photo?.data} />
            <div className={styles.doctors_service_wrapper}>
                <div className={styles.doctors_service}>
                    <h2 className={styles.title}>{data?.lastName}  {data?.firstName} {data?.middleName}</h2>
                </div>
            </div>
        </div>
    )
}