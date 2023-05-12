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

export const BASE_URL = 'http://158.160.49.145:8080'

export default class AuthStore {
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
            phone: observable,
            // login: action,
            // signup: action,
            // logout: action,
            // isAuthorized: computed,
            // user: observable,
            // getUserInfo: action,
            // setPhone: action,
            // clearPhone: action
        })

        this.isLoading = false;
        this.isError = false;
        this.phone = '';
    }


    get isAuthorized() {
        return localStorage.getItem("token")!== null && localStorage.getItem("token")!==''
    }

    login = (accountData: {email: string, password: string}) => {
        this.isLoading = true;
        this.isError = false;
        axios.post(`${BASE_URL}/api/auth/login`, accountData)
            .then((res) => {
                this.isLoading = false;
                alert(res)
                // localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data))
            })
            .catch((err) => {
                this.isLoading = false;
                this.isError = true;
                console.log(err);
            })
    }

    signup = (accountData: {firstName: string, lastName: string, phone: string,
        repeatedPassword:string,  email:string, password: string}) => {
        this.isError = false;
        axios.post(`${BASE_URL}/api/auth/sign-up`, accountData)
            .then((res) => {
                alert(res.data)
                localStorage.setItem("user", JSON.stringify(res.data))
            })
            .catch((err) => {
                this.isError = true;
                console.log(err);
            })
    }

    logout = () => {
        console.log('logout');
        // localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.isError = false;
    };
}
