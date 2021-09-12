import React from 'react'
import s from './contacts.module.scss';
import sContainer from '../styles/container.module.css';



export const Contacts = () => {
  return (
    <div className={s.contacts}>
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
