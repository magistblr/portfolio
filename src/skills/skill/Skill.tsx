import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import TypeScript from '../../assets/svg/typeScript.svg'
import s from './skill.module.scss';

type PropsType = {
  title: any
  descr: any
  icon: any
}

export const Skill = (props: PropsType) => {

  console.log(props.icon);



  return (
    <div className={s.skill}>
      <div className={s.logo}>{<img className={s.img} src={props.icon}/>}</div>
      <h2 className={s.title}>{props.title}</h2>
      <p className={s.description}>{props.descr}</p>
    </div>
  )
}
