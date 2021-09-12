import React from 'react'
import s from './remoteWork.module.scss';
import sContainer from '../styles/container.module.css';


export const RemoteWork = () => {
  return (
    <div className={s.remoteBlock}>
      <div className={`${sContainer.container} ${s.remoteBlock_container}`}>
            <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
      </div>
    </div>
  )
}
