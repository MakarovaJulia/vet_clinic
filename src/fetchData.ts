import axios from "axios";


const BASE_URL = 'http://51.250.108.126:8080'
export const departmentsGet = async () =>{
    let departments = await axios.get(`${BASE_URL}/api/department`)
    console.log(departments)
    return departments
}

export const departmentByIdGet = async (id:string) =>{
    let departments = await axios.get(`${BASE_URL}/api/department`)
    let department = departments.data.find((x:any) => x.id === id);
    return department
}

export const departmentServicesGet = async (id:string) =>{
    let departmentServices = await axios.get(`${BASE_URL}/api/department/${id}/service`)
    console.log(departmentServices)
    return departmentServices
}

export const serviceDoctorsGet = async (id:string) =>{
    let serviceDoctors = await axios.get(`${BASE_URL}/api/department/${id}/doctor`)
    console.log(serviceDoctors)
    return serviceDoctors
}

export const doctorByIdGet = async (id:string|undefined) =>{
    let doctor = await axios.get(`${BASE_URL}/api/doctor/${id}`)
    console.log(doctor)
    return doctor
}

export const doctorPhotoGet = async (id:string|undefined) =>{
    let photo = await axios.get(`${BASE_URL}/api/files/${id}`)
    return photo
}

export const doctorTimeGet = async (id:string|undefined) =>{
    let time = await axios.get(`${BASE_URL}/api/doctor/${id}/time`)
    return time
}