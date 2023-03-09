import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {BaseLayout} from "../../components/BaseLayout";
import {Categories} from "../../components/Categories";
import {PetsGalleryBlock} from "../../components/PetsGalleryBlock";
import {departmentItemsMock} from "../../mocks/serviceItemsMock";

export const ServicesFilterPage = observer(() => {
    return (
        <BaseLayout>
            <div className={styles.filters_wrapper}>
                <div className={styles.categories_wrapper}>
                    <Categories/>
                </div>
                <PetsGalleryBlock galleryItems={departmentItemsMock}/>
            </div>
        </BaseLayout>
    )
})