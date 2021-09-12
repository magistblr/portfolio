import React from 'react'
import s from './about.module.scss';
import sContainer from '../styles/container.module.css';

export const About = () => {
  return (
    <div className={s.mainBlock}>
      <div className={`${sContainer.container} ${s.main_container}`}>
          <div className={s.text}>
            <span>Привет!</span>
            <h1>Меня зовут Ефешин Максим</h1>
            <span>Я front-end разработчик</span>
          </div>
          <div className={s.photo}></div>
      </div>
    </div>
  )
}
