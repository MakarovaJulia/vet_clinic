import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Header} from "../../components/Header";
import styles from "./index.module.sass";
import {useParams} from "react-router-dom";
import {departmentItemsMock} from "../../mocks/serviceItemsMock";
import {serviceItemsMock} from "../../mocks/serviceItemsMock";
import {ServicesBlock} from "../../components/ServicesBlock";


export const ServicePage = observer(() => {

    const [departmentName, setDepartmentName] = useState<any>(null)
    const {id} = useParams()

    const getDepartmentName = (id: number | undefined) => {
        setDepartmentName(departmentItemsMock.find(x => x.id === id)?.name)
    }

    useEffect(()=>{
        if(id){
            getDepartmentName(parseInt(id))
        }
    }, [id])

    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <h1>{departmentName}</h1>
                <div className={styles.items_wrapper}>
                    <ServicesBlock serviceItems={serviceItemsMock} department={departmentName}/>
                </div>
            </div>
        </>
    )
})