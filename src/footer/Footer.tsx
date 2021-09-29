import React from 'react'
import s from './footer.module.scss';
import sContainer from '../styles/container.module.css';
import { Logo } from './logo/Logo';
import { LogoType } from '../App';

type PropsType = {
  logo: LogoType[]
}


export const Footer = (props: PropsType) => {
  return (
    <div className={s.footer} id={"footer"}>
      <div className={`${sContainer.container} ${s.footer_container}`}>
        <a href={"#"} className={s.name}>Yefeshin Maksim</a>
        <div className={s.social}>
          {props.logo.map(item => {
            return <Logo url={item.url} id={item.id} background={item.background}/>
            })}
        </div>
        <p className={s.politics}>© 2021. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}
