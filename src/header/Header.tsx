import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import sContainer from '../styles/container.module.css';
import s from './header.module.scss';


export const Header = () => {

  const scrollToAbout = () => {
      window.scroll({
      top: document.body.offsetHeight + 10,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={s.header} id={"home"}>
      <div className={`${sContainer.container} ${s.container}`}>
    			<div className={s.row}>
              <h1 className={s.text}>
                <p className={s.words}>
                  I Am{' '}
                  <Typewriter
                    words={['Yefeshin Maksim', 'Web Developer']}
                    cursor={true}
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={90}
                    loop={0}
                    delaySpeed={2000}
                  />
                </p>
              </h1>
    			</div>
          <div className={s.arrow}>
                <div onClick={()=> {scrollToAbout()}}><img src="http://www.innovationplans.com/idesign/kewll/img/down-chevron.svg" alt=""/></div>
          </div>
    		</div>
      <div className={s.svg_bg}>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="0,300 310.167,188.5 1443.5,295 1921,193.5 2028,316"></polygon>
            </svg>
      </div>
    </div>
  );
}

