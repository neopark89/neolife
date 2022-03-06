import React from "react";
import Card from "../editor/Card";
import styles from "./preview.module.css";

function Preview({ cards }) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Life Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </ul>
    </section>
  );
}

export default Preview;
