import React from 'react'
import { Skill } from './skill/Skill'
import sContainer from '../styles/container.module.css';
import s from './skills.module.scss';

export const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={`${sContainer.container} ${s.skills_container}`}>
        <h2 className={s.title}>Мои скиллы</h2>
        <div className={s.skills_wrapper}>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    </div>
  )
}
