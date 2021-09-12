import React from 'react'
import s from './nav.module.scss';

export const Nav = () => {
  return (
    <nav  className={s.nav}>
        <div>
          <ul className={s.navbar}>
            <li className={s.nav_item}>
              <a className={s.nav_link} href="#">Home</a>
            </li>
            <li className={s.nav_item}>
              <a className={s.nav_link} href="#">About</a>
            </li>
            <li className={s.nav_item}>
              <a className={s.nav_link} href="#">Portfolio</a>
            </li>
            <li className={s.nav_item}>
              <a className={s.nav_link} href="#">Contacts</a>
            </li>
          </ul>
        </div>
    </nav>
  )
}
