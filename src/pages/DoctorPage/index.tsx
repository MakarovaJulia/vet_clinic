import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {BaseLayout} from "../../components/BaseLayout";
import {parsePath, useParams} from "react-router-dom";
import {doctorsMock} from "../../mocks/doctorsMock";
import img from "../../asserts/doctors/temp_doctor_image.svg"
import {departmentItemsMock, serviceItemsMock} from "../../mocks/serviceItemsMock";
import {ServicesBlock} from "../../components/ServicesBlock";


export const DoctorPage = observer(() => {

    const [doctorData, setDoctorData] = useState<any>(null)
    const [doctorId, setDoctorId] = useState<any>(null)
    const [departmentName, setDepartmentName] = useState<any>(null)
    const {id} = useParams()

    const getDoctorData = (id: number | undefined) => {
        setDoctorData(doctorsMock.find(x => x.id === id))
    }

    useEffect(()=>{
        if(id){
            getDoctorData(parseInt(id))
        }
    }, [id])

    const getDepartmentName = (id: number | undefined) => {
        setDepartmentName(doctorsMock.find(x => x.id === id)?.job_title)
    }

    useEffect(()=>{
        if(id){
            getDepartmentName(parseInt(id))
        }
    }, [id])

    return (
        <BaseLayout>
            <div className={styles.content_wrapper}>
                <div className={styles.top_content}>
                    <img className={styles.doctor_image}  src={img} />
                    <div className={styles.text_block}>
                        <h1 className={styles.text_head}>{doctorData?.last_name} {doctorData?.first_name} {doctorData?.middle_name}</h1>
                        <h3 className={styles.text_head}>{doctorData?.job_title}</h3>
                        <p>{doctorData?.description}</p>
                    </div>
                </div>
                <div className={styles.bottom_content}>
                    <h1>Услуги данного направления</h1>
                    <ServicesBlock serviceItems={serviceItemsMock} department={departmentName}/>
                </div>
            </div>
        </BaseLayout>
    )
})