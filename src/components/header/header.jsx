import React from "react";
import styles from "./styles.module.css";

const Header = ({
  headerText = "lARGE HEADER TEXT",
  pathText = "PROJECT",
  bgImg,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className={styles.box}>
        <div className={styles.headerText}>{headerText}</div>
        <div className={styles.pathText}>Home / {pathText}</div>
      </div>
    </div>
  );
};

export default Header;
