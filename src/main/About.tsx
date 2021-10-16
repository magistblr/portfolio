import React from 'react'
import s from './about.module.scss';
import sContainer from '../styles/container.module.css';

export const About = () => {
  return (
    <div className={s.mainBlock} id={"about"}>
      <div className={`${sContainer.container} ${s.main_container}`}>
          <div className={s.photo_wrapper}>
            <div className={s.photo}></div>
          </div>
          <div className={s.text}>
            <h4>I'm Yefeshin Maksim</h4>
            <span>FRONT-END DEVELOPER</span>
            <p>Hey! I'll tell you a little about what I do. I mainly write in ReactJS, below you can see examples of my work. There are also small projects made in native JS. If you are interested in my code, you can see it in my github profile, the link to it is at the very bottom.</p>
            <a className={s.btn} href="https://drive.google.com/file/d/1uCwWgrPfDwIW1a4ljmh-xVVQ4n7qx7A1/view?usp=sharing">CV</a>
          </div>
      </div>
      <div className={s.settings}>
          <span className={s.left}></span>
          <span className={s.right}></span>
      </div>
    </div>
  )
}
