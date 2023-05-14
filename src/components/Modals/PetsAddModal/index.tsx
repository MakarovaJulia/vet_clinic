import {observer} from "mobx-react";
import {Modal} from "../Modal";
import styles from "./index.module.scss";
import {useStores} from "../../../utils/use-stores-hook";
import {PetsForm} from "../../PetsForm";

export const PetsAddModal = observer(() => {
    const {modalStore: {clearCurrentModal}} = useStores();

    return (
        <Modal
            title='Добавить питомца'
            onClose={clearCurrentModal}
            hasBtnForPartners={false}
            isBottomSheet
        >
            <div className={styles.form}>
                <PetsForm></PetsForm>
            </div>
        </Modal>
    )
})
