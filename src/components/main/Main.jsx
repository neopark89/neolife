import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../login/Footer";
import Header from "../login/Header";
import Editor from "./Editor";
import styles from "./main.module.css";
import Preview from "./Preview";

function Main({ authService }) {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "neo",
      company: "nudgecode",
      theme: "dark",
      title: "software engineer",
      email: "neoesse@gmail.com",
      message: "Gofor it",
      fileName: "neo",
      fileURL: null,
    },
    {
      id: "2",
      name: "jenny",
      company: "nudgecode",
      theme: "light",
      title: "software engineer",
      email: "neoesse@gmail.com",
      message: "Gofor it",
      fileName: "neo",
      fileURL: "images/hanggunee.png",
    },
    {
      id: "3",
      name: "Bora",
      company: "nudgecode",
      theme: "colorful",
      title: "software engineer",
      email: "neoesse@gmail.com",
      message: "Gofor it",
      fileName: "neo",
      fileURL: "images/bora.png",
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Main;
