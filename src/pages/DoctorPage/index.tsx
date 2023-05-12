import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {BaseLayout} from "../../components/BaseLayout";
import {parsePath, useParams} from "react-router-dom";
import {doctorsMock} from "../../mocks/doctorsMock";
import img from "../../asserts/doctors/temp_doctor_image.svg"
import {departmentItemsMock, serviceItemsMock} from "../../mocks/serviceItemsMock";
import {ServicesBlock} from "../../components/ServicesBlock";
import {doctorByIdGet} from "../../fetchData";
import {date} from "yup";


export const DoctorPage = observer(() => {

    const [doctorData, setDoctorData] = useState<any>(null)
    // const [doctorId, setDoctorId] = useState<any>(null)
    const [departmentName, setDepartmentName] = useState<any>(null)
    const {id} = useParams()

    // const getDoctorData = (id: number | undefined) => {
    //     setDoctorData(doctorsMock.find(x => x.id === id))
    // }
    //
    // useEffect(()=>{
    //     if(id){
    //         getDoctorData(parseInt(id))
    //     }
    // }, [id])
    //
    // useEffect(()=>{
    //     if(id){
    //         departmentNameByIdGet(doctorData?.data.departmentId).then((data)=>setDepartmentName(data.data))
    //     }
    // }, [id])

    useEffect(()=>{
        doctorByIdGet(id).then((data)=>{setDoctorData(data.data)})
    }, [])

    return (
        <BaseLayout>
            <div className={styles.content_wrapper}>
                <div className={styles.top_content}>
                    <img className={styles.doctor_image}  src={img} />
                    <div className={styles.text_block}>
                        <h1 className={styles.text_head}>{doctorData?.lastName} {doctorData?.firstName} {doctorData?.middleName}</h1>
                        <h3 className={styles.text_head}>{doctorData?.jobTitle}</h3>
                        <p>{doctorData?.description}</p>
                    </div>
                </div>
                <div className={styles.bottom_content}>
                    <h1>Услуги данного направления</h1>
                    {doctorData?
                        <ServicesBlock departmentId={doctorData?.departmentId}/>
                        :
                        <></>
                    }

                </div>
            </div>
        </BaseLayout>
    )
})