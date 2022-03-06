import React from 'react';
import styles from './header.module.css';

function Header({onLogout}) {
  return (
    <header className={styles.header}>
      {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
      <img className={styles.logo} src='images/default_logo.jpeg' alt='logo' />
      <h1 className={styles.title} >Neo's Life</h1>
    </header>
  )
}

export default Header;