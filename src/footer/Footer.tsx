import React from 'react'
import s from './footer.module.css';
import sContainer from '../allStyles/container.module.css';
import { Logo } from './logo/Logo';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={`${sContainer.container} ${s.footer_container}`}>
        <h2 className={s.name}>Ефешин Максим</h2>
        <div className={s.social}>
          <Logo/>
          <Logo/>
          <Logo/>
          <Logo/>
        </div>
        <h3 className={s.politics}>© 2021 Все права защищены</h3>
      </div>
    </div>
  )
}
