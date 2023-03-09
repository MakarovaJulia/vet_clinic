import {ServiceItem} from "../ServiceItem";
import React from "react";
import styles from "../PetsGalleryBlock/index.module.sass";

interface IServiceItem {
    id: number;
    title: string;
    department: string;
    price: number;
}

interface IServiceItems {
    serviceItems:IServiceItem[];
}

interface IDepartmentItem {
    id: number,
    name: string;
}

export const ServicesBlock = (props: any) => {

    const {serviceItems, department} = props;

    const getServiceData = (serviceItems: IServiceItem[]) => {
        const services = [];
        for (let item of serviceItems) {
            if (item.department == department){
                services.push(
                    <ServiceItem
                        price={item.price}
                        title={item.title}
                        department={item.department}
                        id={item.id}
                    />
                )
             }
        }
        return services
    }

    return (
        <div>
            {getServiceData(serviceItems)}
        </div>
    )
}