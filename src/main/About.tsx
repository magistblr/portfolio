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
            <h4>I'm Yefeshin Max</h4>
            <span>FRONT-END DEVELOPER</span>
            <p>Lorem Ipsum <b>From USA</b> is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the standard dummy text ever since.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
      </div>
      <div className={s.settings}>
          <span className={s.left}></span>
          <span className={s.right}></span>
      </div>
    </div>
  )
}
