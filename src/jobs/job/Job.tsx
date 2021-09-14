import React from 'react'
import s from './job.module.scss';


type PropsType = {
  id: string
  title: string
  background: string
  description: string
  url: string
}

export const Job = (props: PropsType) => {

  


  return (
      <div className={s.job}>
                <img src={props.background} className={s.img} alt="image"/>
            <div className={s.content}>
                    <div className={s.wrapper}>
                        <h6 className={s.title}>{props.title}</h6>
                        <p className={s.description}>{props.description}</p>
                    </div>
                    <div className={s.btn}>
                      <a href={props.url}>View</a>
                    </div>
            </div>
        </div>
  )
}
