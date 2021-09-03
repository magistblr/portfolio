import React from 'react'
import s from './contacts.module.css';
import sContainer from '../allStyles/container.module.css';
import sBtn from '../allStyles/buttons.module.css';


export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={`${sContainer.container} ${s.contacts_container}`}>
        <h2 className={s.title}>Контакты</h2>
        <form className={s.form}>
          <input className={s.input} type="text" />
          <input className={s.input} type="text" />
          <textarea className={s.area}></textarea>
        </form>
        <button className={`${sBtn.btn} ${s.btn_contacts}`}>Отправить</button>
      </div>
    </div>
  )
}
