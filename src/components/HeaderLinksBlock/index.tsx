import React, { useState } from "react";
import styles from "../Header/index.module.sass";
import { NavLink, useNavigate } from "react-router-dom";

export const HeaderLinksBlock = () => {
  const navigate = useNavigate();

  const goTo = (link: string): void => {
    navigate(link);
  };

  return (
    <>
      <div className={styles.header_wrapper}>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? styles.header_link_active : styles.header_link
          }
        >
          О клинике
        </NavLink>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? styles.header_link_active : styles.header_link
          }
        >
          О клинике
        </NavLink>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? styles.header_link_active : styles.header_link
          }
        >
          О клинике
        </NavLink>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? styles.header_link_active : styles.header_link
          }
        >
          О клинике
        </NavLink>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? styles.header_link_active : styles.header_link
          }
        >
          О клинике
        </NavLink>
      </div>
    </>
  );
};
