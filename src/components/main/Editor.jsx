import React from "react";
import CardEditForm from "../editor/CardEditForm";
import styles from "./editor.module.css";

function Editor({ cards }) {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Life Maker</h1>
      {cards.map((card) => {
        return <CardEditForm card={card} />;
      })}
    </div>
  );
}

export default Editor;
