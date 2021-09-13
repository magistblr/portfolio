import React from 'react';
import { Skill } from './skill/Skill';
import sContainer from '../styles/container.module.css';
import s from './skills.module.scss';
import { Title } from '../title/Title';
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { v1 } from 'uuid';
import Redux from '../assets/svg/redux.svg'
import TS from '../assets/svg/ts.svg'
import { TitlePropsType } from '../App';

export const Skills = (props: TitlePropsType) => {

  const CARD_DATA = [
    {
      id: v1(),
      title: 'HTML',
      descr: 'Lorem',
      icon: faHtml5,
    },
    {
      id: v1(),
      title: 'CSS',
      descr: 'Lorem',
      icon: faCss3,
    },
    {
      id: v1(),
      title: 'JavaScript',
      descr: 'Lorem',
      icon: faJs,
    },
    {
      id: v1(),
      title: 'ReactJS',
      descr: 'Lorem',
      icon: faReact,
    },
    {
      id: v1(),
      title: 'Redux',
      descr: 'Lorem',
      icon: Redux,
    },
    {
      id: v1(),
      title: 'TypeScript',
      descr: 'Lorem',
      icon: TS,
    },
  ];

  return (
    <div className={s.skills} id={'skills'}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.skills_container}`}>
        <div className={s.skills_wrapper}>
          {CARD_DATA.map((data) => {
            return <Skill key={data.id} descr={data.descr} title={data.title} icon={data.icon} />;
          })}
        </div>
      </div>
      <div className={s.settings}>
          <span className={s.left}></span>
          <span className={s.right}></span>
      </div>
    </div>
  );
};
