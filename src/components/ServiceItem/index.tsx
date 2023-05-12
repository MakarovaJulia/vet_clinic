import React from "react"
import styles from "./index.module.sass";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../ui/Button";

export const ServiceItem = (props: any) => {

  const {service, department} = props;
  let navigate = useNavigate()


  const goTo = (path: string): void => {
    navigate(path)
  }

    return (
        <div className={styles.item_wrapper}>
            <div className={styles.item_container}>
                <h4>{service?.name}</h4>
                <div className={styles.price_container}>
                  <Button disabled={false} onClick={()=>goTo(  `/service/${department}/${service?.id}`)}>Записатся</Button>
                    <p className={styles.price}>{service?.price} Р</p>
                </div>
            </div>
        </div>
    )
}