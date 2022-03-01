import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../login/Footer";
import Header from "../login/Header";
import styles from "./main.module.css";

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
      <Footer />
    </section>
  );
}

export default Main;
