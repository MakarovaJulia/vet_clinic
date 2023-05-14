import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Header} from "../../components/Header";
import {useParams} from "react-router-dom";
import {serviceDoctorsGet} from "../../fetchData";
import {DoctorsGalleryBlock} from "../../components/DoctorsGalleryBlock";


export const ServicePage = observer(() => {

  const [doctors, setDoctors] = useState<any>(null)
  const {id, departmentId} = useParams()

  useEffect(()=>{
    if(departmentId){
      serviceDoctorsGet(departmentId).then((data) => setDoctors(data))
    }
  }, [departmentId])
  //
  //
  // useEffect(()=>{
  //   if(department){
  //     departmentServicesGet(department.id).then((data) => setServices(data.data))
  //   }
  // }, [department])
  //
  console.log(doctors)

  return (
    <>
      <Header/>
      <DoctorsGalleryBlock doctors={doctors}></DoctorsGalleryBlock>
    </>
  )
})