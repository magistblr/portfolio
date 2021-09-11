import React from 'react'
import s from './nav.module.css';

export const Nav = () => {
  return (
    <nav>
        <div>
          <ul className={s.nav}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
    </nav>
  )
}
