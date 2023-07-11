import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
