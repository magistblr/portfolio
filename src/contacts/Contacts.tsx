import React from 'react'
import s from './contacts.module.scss';
import sContainer from '../styles/container.module.css';
import emailjs from "emailjs-com"
import { TitlePropsType } from '../App';
import { Title } from '../title/Title';

function sendEmail(e: any) {

    e.preventDefault();

    emailjs.sendForm('gmail', 'template_kgozg0d', e.target, 'user_iDmmpyYnYacWobyGLeIPQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
}


export const Contacts = (props: TitlePropsType) => {
  return (
    <div className={s.contacts} id={"contacts"}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.contacts_container}`}>
        <form className={s.form} onSubmit={sendEmail}>
          <input placeholder={"Enter name"} className={s.input} type="text" name="name"/>
          <input placeholder={"Enter email"} className={s.input} type="text" name="email"/>
          <textarea placeholder={"Enter message"} className={s.area} name="message"></textarea>
          <input type="submit" className={s.btn} value="Send message"></input>
        </form>
      </div>
    </div>
  )
}
