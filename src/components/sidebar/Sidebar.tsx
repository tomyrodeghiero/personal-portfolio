import React from "react";
import sidebarStyles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <aside className={sidebarStyles.aside}>
        <a href="#home" className={sidebarStyles.nav__logo}>
          <img src="./assets/logo.svg" alt="" />
        </a>

        <nav className={sidebarStyles.nav}>
          <div className={sidebarStyles.nav__menu}>
            <ul className={sidebarStyles.nav__list}>
              <li className={sidebarStyles.navItem}>
                <a href="#home" className={sidebarStyles.nav__link}>
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className={sidebarStyles.navItem}>
                <a href="#about" className={sidebarStyles.nav__link}>
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className={sidebarStyles.navItem}>
                <a href="#services" className={sidebarStyles.nav__link}>
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className={sidebarStyles.navItem}>
                <a href="#resume" className={sidebarStyles.nav__link}>
                  <i className="icon-notebook"></i>
                </a>
              </li>

              <li className={sidebarStyles.navItem}>
                <a href="#work" className={sidebarStyles.nav__link}>
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className={sidebarStyles.navItem}>
                <a href="#blog" className={sidebarStyles.nav__link}>
                  <i className="icon-note"></i>
                </a>
              </li>

              <li className={sidebarStyles.navItem}>
                <a href="#contact" className={sidebarStyles.nav__link}>
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className={sidebarStyles.copyright}>&copy; 2023</span>
        </div>
      </aside>

      <div className={sidebarStyles.nav__toggle}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
