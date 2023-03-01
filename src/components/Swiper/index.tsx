import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import {GalleryItem} from "../SwiperItem";
import {galleryContent} from "./galleryContent";
import {SliderNextButton, SliderPrevButton} from "../SwiperButtons";
import styles from "./index.module.scss"
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

export const SwiperComponent = () => {
    const content = galleryContent;
    const slides = [];
    SwiperCore.use([Autoplay])

    for (let i = 0; i < content.length; i += 1) {
        slides.push(
            <SwiperSlide key={content[i].itemNo}>
                <GalleryItem
                    title={content[i].title}
                    paragraph={content[i].paragraph}
                    onClick={content[i].onClick}
                    itemNo={content[i].itemNo}
                />
            </SwiperSlide>
        )
    }

    return (
        <article className={styles.galleryWrapper}>
            <Swiper id='main' loop>
                <div className={cx({
                    buttonWrapper: true,
                    buttonLeft: true
                })}>
                    <SliderPrevButton />
                </div>

                {slides}

                <div className={cx({
                    buttonWrapper: true,
                    buttonRight: true
                })}>
                    <SliderNextButton />
                </div>
            </Swiper>
        </article>
    );
}