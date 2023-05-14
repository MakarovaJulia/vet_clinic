import {observer} from "mobx-react";
import {Modal} from "../Modal";
import styles from "./index.module.sass";
import {useStores} from "../../../utils/use-stores-hook";

export const AppointmentAddModal = observer(() => {
  const {modalStore: {clearCurrentModal}} = useStores();

  return (
    <Modal
        title='Записаться на прием'
      onClose={clearCurrentModal}
      hasBtnForPartners={false}
      isBottomSheet
    >
      <div className={styles.form}>
        Форма записи
        {/*<PetsForm></PetsForm>*/}
      </div>
    </Modal>
  )
})