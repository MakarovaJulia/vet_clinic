import React, { useEffect, useState } from "react";
import styles from "./index.module.sass";
import { PetsGalleryPin } from "../PetsGalleryPin";
import { departmentsGet } from "../../fetchData";

interface IDepartmentItem {
  id: number;
  name: string;
}

interface IGalleryItems {
  galleryItems: IDepartmentItem[];
}

export const PetsGalleryBlock = () => {
  const [departments, setDepartments] = useState<any>([]);

  useEffect(() => {
    departmentsGet().then((data) => {
      setDepartments(data.data);
    });
  }, []);

  return (
    <div className={styles.pets_gallery_wrapper}>
      <h1 className={styles.pins_gallery_header}>Услуги</h1>
      <ul className={styles.pets_gallery}>
        {departments &&
          departments.map((data: any) => <PetsGalleryPin data={data} />)}
      </ul>
    </div>
  );
};
