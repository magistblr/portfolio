import React from 'react'
import { TitlePropsType } from '../App';
import sContainer from '../styles/container.module.css';
import { Title } from '../title/Title';
import { Job } from './job/Job';
import s from './jobs.module.scss';
import sBtn from './buttonJobs.module.scss';



export const Jobs = (props: TitlePropsType) => {
  return (
    <div className={s.jobs} id={"jobs"}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.jobs_container}`}>
      <div className={s.wrapper_btn}>
        <ButtonJobs text={"ALL"}/>
        <ButtonJobs text={"HTML/CSS"}/>
        <ButtonJobs text={"JS"}/>
        <ButtonJobs text={"REACTJS"}/>
      </div>
        <div className={s.jobs_wrapper}>
          <Job/>
          <Job/>
        </div>
      </div>
    </div>
  )
}


const ButtonJobs = (props: any) => {
  return (
    <span className={sBtn.btn_jobs_filter}>{props.text}</span>
  )
}
