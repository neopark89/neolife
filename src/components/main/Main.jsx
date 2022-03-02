import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../login/Footer";
import Header from "../login/Header";
import Editor from './Editor';
import styles from "./main.module.css";
import Preview from './Preview';

function Main({ authService }) {
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
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
}

export default Main;
