import React from 'react'
import s from './main.module.css';
import sContainer from '../allStyles/container.module.css';

export const Main = () => {
  return (
    <div className={s.mainBlock}>
      <div className={sContainer.container}>
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
