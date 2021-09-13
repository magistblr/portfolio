import React, { useState } from 'react';
import { TitlePropsType } from '../App';
import s from './title.module.scss';


export const Title = (props: TitlePropsType) => {


  return (
    <div className={s.wrapper} id={"title"}>
        <div className={s.container}>
          <h4 className={s.title}>{props.title}</h4>
          <h6 className={s.sub_title}>{props.subtitle}</h6>
        </div>
    </div>
  );
}

