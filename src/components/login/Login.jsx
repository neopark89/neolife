import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./login.module.css";

function Login({ authService }) {
  const history = useHistory();
  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };
  
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMain(user.uid);
    })
  })

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          {/* <li>
            <button onClick={onLogin}>Github</button>
          </li> */}
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;
