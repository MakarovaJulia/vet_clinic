import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://51.250.108.126:8080";
export const departmentsGet = async () => {
  let departments = await axios.get(`${BASE_URL}/api/department`);
  return departments;
};

export const departmentByIdGet = async (id: string) => {
  let departments = await axios.get(`${BASE_URL}/api/department`);
  let department = departments.data.find((x: any) => x.id === id);
  return department;
};

export const departmentServicesGet = async (id: string) => {
  let departmentServices = await axios.get(
    `${BASE_URL}/api/department/${id}/service`
  );
  return departmentServices;
};

export const serviceDoctorsGet = async (id: string) => {
  let serviceDoctors = await axios.get(
    `${BASE_URL}/api/department/${id}/doctor`
  );
  return serviceDoctors;
};

export const doctorByIdGet = async (id: string | undefined) => {
  let doctor = await axios.get(`${BASE_URL}/api/doctor/${id}`);
  return doctor;
};

export const doctorPhotoGet = async (id: string | undefined) => {
  let photo = await axios.get(`${BASE_URL}/api/files/${id}`);
  return photo;
};

export const doctorTimeGet = async (id: string | undefined) => {
  let time = await axios.get(`${BASE_URL}/api/doctor/${id}/time`);
  return time;
};

export const userByIdGet = async (id: string | undefined) => {
  let user = await axios.get(`${BASE_URL}/api/user/${id}`);
  return user;
};

export const userByTokenGet = async (token: string | undefined) => {
  let new_token = token?.slice(7);
  let user = await axios.get(
    `${BASE_URL}/api/token/user-info?token=${new_token}`
  );
  return user;
};

export const petTypesGet = async () => {
  let petTypes = await axios.get(`${BASE_URL}/api/pet/type`);
  return petTypes;
};

export const headers = {
  Authorization: localStorage.getItem("token"),
};
export const userPetsByIdGet = async (id: string | undefined) => {
  let result = {};
  let userPets = await axios({
    url: `${BASE_URL}/api/user/${id}/pet`,
    method: "get",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((data) => (result = data))
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const userAppointmentsByIdGet = async (id: string | undefined) => {
  let result = {};
  let userPets = await axios({
    url: `${BASE_URL}/api/user/${id}/appointment`,
    method: "get",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((data) => (result = data))
    .catch((err) => {
      console.log(err);
    });
  return result;
};
