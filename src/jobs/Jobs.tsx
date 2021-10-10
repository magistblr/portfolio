import React from 'react'
import { JobsPropsType, TitlePropsType } from '../App';
import sContainer from '../styles/container.module.css';
import { Title } from '../title/Title';
import { Job } from './job/Job';
import s from './jobs.module.scss';

type PropsType = {
  cards: JobsPropsType[]
  filter: string
  callBack: (value: string) => void
}

export const Jobs = (props: TitlePropsType & PropsType) => {

  const onAllClickHandler = () => props.callBack("all");
  const onReactlClickHandler = () => props.callBack("react");
  const onJSClickHandler = () => props.callBack("js");
  const onHTMLClickHandler = () => props.callBack("html/css");

  const activeFilter = `${s.btn_jobs_filter} ${s.btn_jobs_filter_active}`

  return (
    <div className={s.jobs} id={"jobs"}>
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`${sContainer.container} ${s.jobs_container}`}>
        <div>
          <div className={s.wrapper_btn}>
          <span onClick={() => {onAllClickHandler()}} className={props.filter === 'all' ? activeFilter : s.btn_jobs_filter}>ALL</span>
          <span onClick={() => {onHTMLClickHandler()}} className={props.filter === 'html/css' ? activeFilter : s.btn_jobs_filter}>HTML/CSS</span>
          <span onClick={() => {onJSClickHandler()}} className={props.filter === 'js' ? activeFilter : s.btn_jobs_filter}>JS</span>
          <span onClick={() => {onReactlClickHandler()}} className={props.filter === 'react' ? activeFilter : s.btn_jobs_filter}>REACT</span>
          </div>
        </div>
        <div className={s.jobs_wrapper}>

          {props.cards.map((data) => {
            return <Job
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        background={data.background}
                        description={data.description}
                        url={data.url}
                    />;
          })}
        </div>
      </div>
      <div className={s.settings}>
          <span className={s.left}></span>
          <span className={s.right}></span>
      </div>
    </div>
  )
}

