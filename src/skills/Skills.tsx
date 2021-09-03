import React from 'react'
import { Skill } from './skill/Skill'
import sContainer from '../container/container.module.css';
import s from './skills.module.css';

export const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={`${sContainer.container} ${s.skills_container}`}>
        <h2>Мои скиллы</h2>
        <div className={s.skills_wrapper}>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    </div>
  )
}
