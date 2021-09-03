import React from 'react'
import s from './job.module.css';

export const Job = () => {
  return (
    <div className={s.job}>
      <div className={s.content}>
        <button className={s.btn}>Смотреть</button>
      </div>
      <div className={s.decription}>
        <h3>Название проекта</h3>
        <p>Краткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описание</p>
      </div>
    </div>
  )
}
