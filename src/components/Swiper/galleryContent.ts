export interface IGalleryContent {
    title: string;
    paragraph: string;
    onClick: () => void;
    itemNo: 1 | 2 | 3
}


export const galleryContent: IGalleryContent[] = [
    {
        title: 'СКИДКА ПРИЮТАМ - 20%',
        paragraph: 'Наша ветклиника предоставляет скидку приютам, с которыми имеет официальный договор',
        onClick: () => {},
        itemNo: 1
    },
    {
        title: 'СКИДКА ПРИЮТАМ - 20%',
        paragraph: 'Наша ветклиника предоставляет скидку приютам, с которыми имеет официальный договор',
        onClick: () => {},
        itemNo: 2
    },
    {
        title: 'СКИДКА ПРИЮТАМ - 20%',
        paragraph: 'Наша ветклиника предоставляет скидку приютам, с которыми имеет официальный договор',
        onClick: () => {},
        itemNo: 3
    }
]