import AuthStore from "./authStore";
import { ModalStore } from "./modalStore";
import PetsStore from "./petsStore";
import AppointmentStore from "./appointmentStore";

export class MainStore {
  authStore: AuthStore;
  modalStore: ModalStore;
  petsStore: PetsStore;
  appointmentStore: AppointmentStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.modalStore = new ModalStore(this);
    this.petsStore = new PetsStore(this);
    this.appointmentStore = new AppointmentStore(this);
  }
}

const mainStore = new MainStore();

export default mainStore;
