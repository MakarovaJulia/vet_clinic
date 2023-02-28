import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import login_image from "../../asserts/login_image.svg";
import {NavLink} from "react-router-dom";
import {RoutesList} from "../../config/RoutesList";
import {DoctorsGalleryBlock} from "../../components/DoctorsGalleryBlock";
import {BaseLayout} from "../../components/BaseLayout";
import {Categories} from "../../components/Categories";

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