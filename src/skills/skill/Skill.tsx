import React from 'react'
import s from './skill.module.scss';

export const Skill = () => {
  return (
    <div className={s.skill}>
      <div className={s.logo}></div>
      <h2>React</h2>
      <p>Описание навыка</p>
    </div>
  )
}
