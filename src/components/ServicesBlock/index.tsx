import {ServiceItem} from "../ServiceItem";
import React from "react";

export const ServicesBlock = (props: any) => {

    const {serviceItems, department} = props;

    return (
        <div>
            {serviceItems && serviceItems.map((data: any) => (
                <ServiceItem service={data} department={department}/>
            ))}
        </div>
    )
}