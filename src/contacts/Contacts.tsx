import React, { useState } from 'react'
import s from './contacts.module.scss';
import sContainer from '../styles/container.module.css';
import emailjs from "emailjs-com"
import { TitlePropsType } from '../App';
import { Title } from '../title/Title';



export const Contacts = (props: TitlePropsType) => {

const [ok, setOk] = useState(false)
const [text, setText] = useState("SUCCESS")
const [send, setSend] = useState<boolean>(false)


  function sendEmail(e: any) {

    const onchange = () => {
      setSend(true)
    }
    onchange()

    e.preventDefault();
    console.log(e);

    emailjs
    .sendForm('gmail', 'template_kgozg0d', e.target, 'user_iDmmpyYnYacWobyGLeIPQ')
    .then((result) => {
          if(result.text === "OK"){
            setOk(true)
            setText("SUCCESS")
            setSend(false)
            closeSuccess()
          }
      }, (error) => {
        if(error){
          setOk(true)
          setText("ERROR")
          setSend(false)
          closeSuccess()
        }
      });
    e.target.reset()
  }


  const closeSuccess = () => {
    setTimeout(() => {
      setOk(false)
    }, 5000);
  }


  return (
    <div className={s.contacts} id={"contacts"}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.contacts_container}`}>
        <div className={!ok ?  `${s.success_active} ${s.success}` : s.success}>{text}</div>
        <form className={s.form} onSubmit={sendEmail}>
          <input placeholder={"Enter name"} className={s.input} type="text" name="name" />
          <input placeholder={"Enter email"} className={s.input} type="email" name="email" />
          <textarea placeholder={"Enter message"} className={s.area} name="message" ></textarea>
          <input type="submit" disabled={send} className={s.btn} value={"Send message"}/>
          {send && <Spinner/>}
        </form>
      </div>
    </div>
  )
}


const Spinner = () => {
  return (
    <svg className={s.spinner} viewBox="0 0 50 50">
      <circle className={s.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  )
}
