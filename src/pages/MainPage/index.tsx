import React from "react";
import {observer} from "mobx-react";
import {Button} from "../../components/ui/Button";
import {Input} from "../../components/ui/Input";
import {BaseLayout} from "../../components/BaseLayout";
import {TextBlock} from "../../components/TextBlock";
import {SwiperComponent} from "../../components/Swiper";
import {PetsGalleryBlock} from "../../components/PetsGalleryBlock";
import {DoctorsGalleryBlock} from "../../components/DoctorsGalleryBlock";
import styles from "../../components/BaseLayout/index.module.sass";
import {Footer} from "../../components/Footer";
import {useNavigate} from "react-router-dom";

export const MainPage = observer(() => {
    let navigate = useNavigate()

    const goTo = (path: string): void => {
        navigate(path)
    }

    return(
        <BaseLayout>
            <div className={styles.content_wrapper}>
                <SwiperComponent/>
                <TextBlock>
                    В клинике проводится полный комплекс работ по диагностике, лечению и профилактике заболеваний,
                    а также реабилитация животных после травм и операций. У нас есть современный и комфортабельный стационар, в том числе инфекционный
                </TextBlock>
                <PetsGalleryBlock/>
                <div className={styles.btn_wrapper}>
                    <Button disabled={false} theme="secondary" onClick={()=>{goTo('/services_filter')}}>Все услуги</Button>
                </div>
                <DoctorsGalleryBlock/>
                <div className={styles.btn_wrapper}>
                    <Button disabled={false} theme="primary" onClick={()=>{goTo('/doctors_filter')}}>Все врачи</Button>
                </div>
                <TextBlock>
                    В ветклинике  работают не только ветеринары общего профиля, но и врачи, специализирующиеся в области кардиологии, травматологии, неврологии, онкологии, дерматологии, эндокринологии, хирургии. В нашей лаборатории можно сдать все виды анализов крови: биохимический, клинический, на гормоны, на аллергены, сделать анализы мочи и кала.
                    Современное оборудование позволяет нам проводить комплексную диагностику животного, включая УЗИ и эндоскопию. Также проводятся цитологические исследования на фертильность собак для определения оптимального времени вязки.
                </TextBlock>
            </div>
            <Footer/>
        </BaseLayout>
    )
})