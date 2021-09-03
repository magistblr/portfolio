import React from 'react'
import sContainer from '../container/container.module.css';
import { Job } from './job/Job';
import s from './jobs.module.css';

export const Jobs = () => {
  return (
    <div className={s.jobs}>
      <div className={`${sContainer.container} ${s.jobs_container}`}>
        <h2>Мои работы</h2>
        <div className={s.jobs_wrapper}>
          <Job/>
          <Job/>
        </div>
      </div>
    </div>
  )
}
