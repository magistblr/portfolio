import React from 'react';
import { Skill } from './skill/Skill';
import sContainer from '../styles/container.module.css';
import s from './skills.module.scss';
import { Title } from '../title/Title';
import { v1 } from 'uuid';
import { TitlePropsType } from '../App';
import Redux from '../assets/svg/redux.svg'
import TS from '../assets/svg/ts.svg'
import JS from '../assets/svg/js.svg'
import react from '../assets/svg/react.svg'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'

export const Skills = (props: TitlePropsType) => {

  const CARD_DATA = [
    {
      id: v1(),
      title: 'HTML',
      descr: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      icon: html,
    },
    {
      id: v1(),
      title: 'CSS',
      descr: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
      icon: css,
    },
    {
      id: v1(),
      title: 'JavaScript',
      descr: 'Commonly used as a built-in language for programmatically accessing application objects. It is most widely used in browsers as a scripting language for adding interactivity to web pages.',
      icon: JS,
    },
    {
      id: v1(),
      title: 'ReactJS',
      descr: 'Is a declarative, efficient and flexible JavaScript library for building user interfaces. It allows you to assemble complex UI from small, isolated pieces of code called "components".',
      icon: react,
    },
    {
      id: v1(),
      title: 'Redux',
      descr: 'An open source JavaScript library for managing application state. Most often used in conjunction with React or Angular for front-end development. Contains a number of tools to greatly simplify the transfer of warehouse data through context.',
      icon: Redux,
    },
    {
      id: v1(),
      title: 'TypeScript',
      descr: 'A programming language for extending the capabilities of Javascript. Provides the ability to write strongly typed code. At the moment, it is more and more used in modern development.',
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
