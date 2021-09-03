import React from 'react'
import s from './remoteWork.module.css';
import sContainer from '../allStyles/container.module.css';
import sBtn from '../allStyles/buttons.module.css';

export const RemoteWork = () => {
  return (
    <div className={s.remoteBlock}>
      <div className={`${sContainer.container} ${s.remoteBlock_container}`}>
            <h2>Рассматриваю варианты удаленной работы</h2>
            <button className={sBtn.btn}>Нанять меня</button>
      </div>
    </div>
  )
}
