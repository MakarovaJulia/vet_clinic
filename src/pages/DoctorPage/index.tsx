import React from "react";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import login_image from "../../asserts/login_image.svg";
import {NavLink} from "react-router-dom";
import {RoutesList} from "../../config/RoutesList";
import {BaseLayout} from "../../components/BaseLayout";
import temp_image from "../../asserts/temp_doctor_image.svg";
import {DoctorsServiceList} from "../../components/DoctorServiceList";

export const DoctorPage = observer(() => {
    return (
        <BaseLayout>
            <div className={styles.content_wrapper}>
                <div className={styles.top_content}>
                    <img className={styles.doctor_image} src={temp_image}/>
                    <div className={styles.text_block}>
                        <h1 className={styles.text_head}>Имя врача</h1>
                        <h3 className={styles.text_head}>Должность врача</h3>
                        <p>
                            В 2012 году окончил Луганский национальный аграрный университет.
                            С 4 курса проходил практику в ветеринарных клиниках.
                            С 2012 года работаю ветеринарным врачом.
                            В 2012 году окончил Луганский национальный аграрный университет.
                            С 4 курса проходил практику в ветеринарных клиниках.
                            С 2012 года работаю ветеринарным врачом.
                        </p>
                    </div>
                </div>
                <div className={styles.bottom_content}>
                    <DoctorsServiceList/>
                </div>
            </div>
        </BaseLayout>
    )
})