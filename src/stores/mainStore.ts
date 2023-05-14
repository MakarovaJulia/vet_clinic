import AuthStore from "./authStore";
import {ModalStore} from "./modalStore";
import PetsStore from "./petsStore";

export class MainStore{
    authStore: AuthStore;
    modalStore: ModalStore;
    petsStore: PetsStore;

    constructor() {
        this.authStore = new AuthStore(this);
        this.modalStore = new ModalStore(this);
        this.petsStore = new PetsStore(this);
    }
}

const mainStore = new MainStore();

export default mainStore