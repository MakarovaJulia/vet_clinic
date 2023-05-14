interface IDepartmentItem {
    id: number,
    name: string;
    count: number
}

export const departmentItemsMock: IDepartmentItem[] = [
    {
        id: 0,
        name: 'Травматология',
        count: 1
    },
    {
        id: 1,
        name: 'Стоматология',
        count: 4
    },
    {
        id: 2,
        name: 'Хирургия',
        count: 4
    },
    {
        id: 3,
        name: 'Кардиология',
        count: 1
    },
    {
        id: 4,
        name: 'Травматология',
        count: 5
    },
    {
        id: 5,
        name: 'Стоматология',
        count: 2
    },
    {
        id: 6,
        name: 'Хирургия',
        count: 3
    },
    {
        id: 7,
        name: 'Кардиология',
        count: 1
    },
]

interface IServiceItem {
    id: number;
    title: string;
    department: string;
    price: number;
}

export const serviceItemsMock: IServiceItem[] = [
    {
        id: 0,
        title: 'Закрытое вправление вывиха тазобедренного сустава (животное более 55 кг)',
        department:'Травматология',
        price: 1000,
    },
    {
        id: 1,
        title: 'Лечение кариеса',
        department:'Стоматология',
        price: 1000,
    },
    {
        id: 2,
        title: 'Первичный прием хирурга (клинический осмотр)',
        department:'Хирургия',
        price: 1000,
    },
    {
        id: 3,
        title: 'Эхокардиография',
        department:'Кардиология',
        price: 1000,
    },
    {
        id: 4,
        title: 'Хирургическое лечение вывиха локтевого, плечевого, тазобедренного, коленного запястного сустава (животное 1-10 кг)',
        department:'Травматология',
        price: 1000,
    }
]
