import {MainStore} from "./mainStore";
import {makeObservable, observable, action, computed} from "mobx";
import axios from "axios";

interface userProps{
  id?: string,
  firstName?: string,
  lastName?: string,
  email: string,
  phone?: string,
}

export const BASE_URL = 'http://51.250.108.126:8080'


export const headers = {
  'Authorization': localStorage.getItem("token")
}

export default class PetsStore {
  user: userProps;
  isLoading: boolean;
  isError: boolean;
  phone: string;

  constructor(public mainStore: MainStore) {
    this.user = {
      phone: '',
      email: '',
    }
    makeObservable(this,{
      isLoading: observable,
      isError: observable,
    })

    this.isLoading = false;
    this.isError = false;
    this.phone = '';
  }

  addPet = (petData: {userId: string, animalTypeId: string, name: string}) => {
    this.isLoading = true;
    this.isError = false;
    console.log(headers)
    axios.post(`${BASE_URL}/api/pet`, petData, {headers: headers})
      .then((res) => {
        this.isLoading = false;
        alert(res)
      })
      .catch((err) => {
        this.isLoading = false;
        this.isError = true;
        console.log(err);
      })
  }
}