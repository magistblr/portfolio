import React from 'react'
import s from './contacts.module.scss';
import sContainer from '../styles/container.module.css';
import { TitlePropsType } from '../App';
import { Title } from '../title/Title';



export const Contacts = (props: TitlePropsType) => {
  return (
    <div className={s.contacts} id={"contacts"}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.contacts_container}`}>
        <h2 className={s.title}>Contacts</h2>
        <form className={s.form}>
          <input className={s.input} type="text" />
          <input className={s.input} type="text" />
          <textarea className={s.area}></textarea>
        </form>
        <button className={s.btn}>Message</button>
      </div>
    </div>
  )
}
