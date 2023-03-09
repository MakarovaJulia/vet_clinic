import React from "react"
import styles from "./index.module.sass";
import {PetsGalleryPin} from "../PetsGalleryPin";

interface IDepartmentItem {
    id: number,
    name: string;
}

interface IGalleryItems {
    galleryItems:IDepartmentItem[];
}

export const PetsGalleryBlock = (props: IGalleryItems) => {

    const {galleryItems} = props;

    const getPins = (mapItems: IDepartmentItem[]) => {
        const cards = [];
        for (let item of mapItems) {
            if (item.id < 6){
                cards.push(
                    <PetsGalleryPin
                        department={item.name}
                        id={item.id}
                    />
                )
            }
            else break
        }
        return cards;
    }

    return (
        <div className={styles.pets_gallery_wrapper}>
            <h1 className={styles.pins_gallery_header}>Услуги</h1>
            <ul className={styles.pets_gallery}>
                {getPins(galleryItems)}
            </ul>
        </div>
    )
}