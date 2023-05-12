import {ServiceItem} from "../ServiceItem";
import React from "react";

export const ServicesBlock = (props: any) => {

    const {serviceItems} = props;

    return (
        <div>
            {serviceItems && serviceItems.map((data: any) => (
                <ServiceItem data={data}/>
            ))}
        </div>
    )
}