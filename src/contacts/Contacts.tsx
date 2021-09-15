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
        <form className={s.form}>
          <input placeholder={"Enter name"} className={s.input} type="text" />
          <input placeholder={"Enter email"} className={s.input} type="text" />
          <textarea placeholder={"Enter message"} className={s.area}></textarea>
        </form>
        <button className={s.btn}>Send message</button>
      </div>
    </div>
  )
}
