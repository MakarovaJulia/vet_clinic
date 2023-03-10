interface IDoctorItem {
    id: number,
    first_name: string;
    last_name: string;
    middle_name: string;
    description: string;
    job_title: string;
    photo_id: number;
}

export const doctorsMock: IDoctorItem[] = [
    {
        id: 0,
        first_name: 'Василий',
        last_name: 'Котяров',
        middle_name:'Михайлович',
        description: 'В 2012 году окончил Луганский национальный аграрный университет.\n' +
            'С 4 курса проходил практику в ветеринарных клиниках.\n' +
            'С 2012 года работаю ветеринарным врачом.',
        job_title:'Хирургия',
        photo_id: 0
    },
    {
        id: 1,
        first_name: 'Дуся',
        last_name: 'Манулова',
        middle_name:'Джековна',
        description: 'В 2012 году окончил Луганский национальный аграрный университет.\n' +
            'С 4 курса проходил практику в ветеринарных клиниках.\n' +
            'С 2012 года работаю ветеринарным врачом.',
        job_title:'Стоматология',
        photo_id: 1
    },
    {
        id: 2,
        first_name: 'Люмьер',
        last_name: 'Хомякова',
        middle_name:'Эдуардовна',
        description: 'В 2012 году окончил Луганский национальный аграрный университет.\n' +
            'С 4 курса проходил практику в ветеринарных клиниках.\n' +
            'С 2012 года работаю ветеринарным врачом.',
        job_title:'Кардиология',
        photo_id: 2
    },
    {
        id: 3,
        first_name: 'Алевтина',
        last_name: 'Мышь',
        middle_name:'Таксовна',
        description: 'В 2012 году окончил Луганский национальный аграрный университет.\n' +
            'С 4 курса проходил практику в ветеринарных клиниках.\n' +
            'С 2012 года работаю ветеринарным врачом.',
        job_title:'Стоматология',
        photo_id: 3
    },
]