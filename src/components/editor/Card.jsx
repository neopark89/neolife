import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "images/default_logo.jpeg";

function Card({ card }) {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <h1 className={styles.company}>{company}</h1>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.email}>{email}</h1>
        <h1 className={styles.message}>{message}</h1>
      </div>
    </li>
  );
}

export default Card;

const getStyles = (theme) => {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};
