import React, { useState } from "react";
import styles from "./index.module.sass";

export const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <p className={styles.inf_text}>
        Приведённые цены и характеристики товаров и услуг носят исключительно
        ознакомительный характер и не являются публичной офертой.Для получения
        подробной информации о характеристиках товаров и услуг, их наличии и
        стоимости связывайтесь по телефону с администратором.
      </p>
    </div>
  );
};
