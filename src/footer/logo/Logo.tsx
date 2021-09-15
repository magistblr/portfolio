import React from 'react'
import s from './logo.module.scss';

type PropsType = {
  id: string
  url: string
  background: string
}

export const Logo = (props: PropsType) => {

  console.log(props.background);
  

  // const backgroundIMG = {
  //   color: '#777',
  //   backgroundImage: 'url(' + props.background + ')',
  // }

  return (
      <a href={props.url} className={s.logo}>
        {<img className={s.name} src={props.background} alt="logo" />}
      </a>
    )
}
