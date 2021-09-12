import React from 'react'
import sContainer from '../styles/container.module.css';
import { Job } from './job/Job';
import s from './jobs.module.scss';

export const Jobs = () => {
  return (
    <div className={s.jobs}>
      <div className={`${sContainer.container} ${s.jobs_container}`}>
        <h2 className={s.title}>Мои работы</h2>
        <div className={s.jobs_wrapper}>
          <Job/>
          <Job/>
        </div>
      </div>
    </div>
  )
}
