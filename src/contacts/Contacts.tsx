import React, { ChangeEvent, useState } from 'react'
import s from './contacts.module.scss';
import sContainer from '../styles/container.module.css';
import emailjs from "emailjs-com"
import { TitlePropsType } from '../App';
import { Title } from '../title/Title';



export const Contacts = (props: TitlePropsType) => {

const [ok, setOk] = useState(true)
const [text, setText] = useState("SUCCESS")

console.log(ok);

  function sendEmail(e: any) {

    e.preventDefault();

    emailjs.sendForm('gmail', 'template_kgozg0d', e.target, 'user_iDmmpyYnYacWobyGLeIPQ')
      .then((result) => {
          if(result.text === "OK"){
            setOk(false)
            setText("SUCCESS")
            closeSuccess()
          }
      }, (error) => {
        if(error){
          setOk(false)
          setText("ERROR")
          closeSuccess()
        }
      });
    e.target.reset()
}

  const onchange = () => {
    setOk(!ok)
  }

  const closeSuccess = () => {
    setTimeout(() => {
      setOk(true)
    }, 7000);
  }



  return (
    <div className={s.contacts} id={"contacts"}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.contacts_container}`}>
        <div onClick={onchange} className={ok ?  `${s.success_active} ${s.success}` : s.success}>{text}</div>
        <form className={s.form} onSubmit={sendEmail}>
          <input placeholder={"Enter name"} className={s.input} type="text" name="name" />
          <input placeholder={"Enter email"} className={s.input} type="email" name="email" />
          <textarea placeholder={"Enter message"} className={s.area} name="message" ></textarea>
          <button type="submit" className={s.btn}>Send message</button>
        </form>
      </div>
    </div>
  )
}
