import React from 'react'
import s from './job.module.scss';

export const Job = () => {
  return (
    <div className={s.job}>
      <div className={s.content}>
        <div className={s.btn}>
          <a href="https://www.youtube.com/">Смотреть</a>
        </div>
      </div>
      <div className={s.decription}>
        <h3>Название проекта</h3>
        <p>Краткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описаниеКраткое описание</p>
      </div>
    </div>
  )
}


