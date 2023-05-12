import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {BaseLayout} from "../../components/BaseLayout";
import {useParams} from "react-router-dom";
import img from "../../asserts/doctors/temp_doctor_image.svg"
import {doctorByIdGet, doctorTimeGet} from "../../fetchData";
import {AppointmentsBlock} from "../../components/Appointments";


export const DoctorPage = observer(() => {

    const [doctorData, setDoctorData] = useState<any>(null)
    const [time, setTime] = useState<any>(null)
    const {id} = useParams()

    useEffect(()=>{
        doctorByIdGet(id).then((data)=>{setDoctorData(data.data)})
    }, [])

    useEffect(()=>{
        if(id){
            doctorTimeGet(id).then((data)=>{setTime(data.data)})
        }
    }, [id])
    return (
        <BaseLayout>
            <div className={styles.content_wrapper}>
                <div className={styles.top_content}>
                    <img className={styles.doctor_image}  src={ `http://51.250.108.126:8080/api/files/${doctorData?.photoId}`} />
                    <div className={styles.text_block}>
                        <h1 className={styles.text_head}>{doctorData?.lastName} {doctorData?.firstName} {doctorData?.middleName}</h1>
                        <h3 className={styles.text_head}>{doctorData?.jobTitle}</h3>
                        <p>{doctorData?.description}</p>
                    </div>
                </div>
                <div className={styles.bottom_content}>
                  <AppointmentsBlock time={time}></AppointmentsBlock>
                </div>
            </div>
        </BaseLayout>
    )
})