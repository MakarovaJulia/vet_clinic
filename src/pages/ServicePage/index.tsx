import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Header} from "../../components/Header";
import styles from "./index.module.sass";
import {useParams} from "react-router-dom";
import {departmentByIdGet, departmentServicesGet} from "../../fetchData";
import {ServicesBlock} from "../../components/ServicesBlock";


export const ServicePage = observer(() => {

    const [department, setDepartment] = useState<any>(null)
    const [services, setServices] = useState<any>(null)
    const {id} = useParams()

    useEffect(()=>{
        if(id){
            departmentByIdGet(id).then((data) => setDepartment(data))
        }
    }, [id])


    useEffect(()=>{
        if(department){
            departmentServicesGet(department.id).then((data) => setServices(data.data))
        }
    }, [department])

    console.log(services)

    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                {department?
                  <>
                      <h1>{department.name}</h1>
                      <div className={styles.items_wrapper}>
                          <ServicesBlock serviceItems={services}/>
                      </div>
                  </>
                  :
                  <></>
                }
            </div>
        </>
    )
})