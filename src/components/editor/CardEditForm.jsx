import React from "react";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/ImageFileInput";
import styles from "./cardEditForm.module.css";

function CardEditForm({ card }) {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const onSubmit = () => {};
  return (
    <section>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
        ></input>
        <input
          className={styles.input}
          type="text"
          name="company"
          value={company}
        ></input>
        <select className={styles.select} name="theme" value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
        ></input>
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
        ></input>
        <textarea
          className={styles.textarea}
          name="message"
          value={message}
        ></textarea>
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>
    </section>
  );
}

export default CardEditForm;
