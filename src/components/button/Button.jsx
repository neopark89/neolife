import React from "react";
import styles from "./button.module.css";

function Button({ name, onClick }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>{name}</button>
    </div>
  );
}

export default Button;
