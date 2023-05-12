import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {DoctorsGalleryBlock} from "../../components/DoctorsGalleryBlock";
import {BaseLayout} from "../../components/BaseLayout";
import {Categories} from "../../components/Categories";
import {doctorsMock} from "../../mocks/doctorsMock";

export const DoctorsFilterPage = observer(() => {
    return (
        <BaseLayout>
            <div className={styles.filters_wrapper}>
                <div className={styles.categories_wrapper}>
                    <Categories/>
                </div>
                <DoctorsGalleryBlock/>
            </div>
        </BaseLayout>
    )
})