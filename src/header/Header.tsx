import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import sContainer from '../styles/container.module.css';
import s from './header.module.scss';


export const Header = () => {


  return (
    <div className={s.header}>
      <div className={s.svg_bg}>
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
                </svg>
            </div>
      <div className={`${sContainer.container} ${s.container}`}>
    			<div className={s.row}>
              <h1 className={s.text}>
                <p className='App'>
                  I am{' '}
                  <Typewriter
                  words={['Yefeshin Max', 'Web developer']}
                  cursorStyle='_'
                  typeSpeed={80}
                  deleteSpeed={90}
                  loop={0}
                  delaySpeed={2000}
                  />
                </p>
              </h1>
    			</div>
          <div className={s.arrow}>
                <img src="http://www.innovationplans.com/idesign/kewll/img/down-chevron.svg" alt=""/>
            </div>
    		</div>
    </div>
  );
}

