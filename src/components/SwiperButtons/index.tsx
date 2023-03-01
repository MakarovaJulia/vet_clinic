import { useSwiper } from 'swiper/react';
import styles from "./index.module.scss"
import arrowLeft from '../../asserts/icons/arrowLeft.svg'
import arrowRight from '../../asserts/icons/arrowRight.svg'


export const SliderNextButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()} id={styles.btnLeft}>
            <img src={arrowRight}/>
        </button>
    )
}

export const SliderPrevButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slidePrev()} id={styles.btnRight}>
            <img src={arrowLeft}/>
        </button>
    )
}