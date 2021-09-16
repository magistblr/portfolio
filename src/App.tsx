import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Jobs } from './jobs/Jobs';
import { About } from './main/About';
import { Nav } from './nav/Nav';
import { Skills } from './skills/Skills';
import todoImg from './assets/img/todo.png';
import counterImg from './assets/img/counter.png';
import uberImg from './assets/img/uber.png';
import weatherImg from './assets/img/weather.png';
import vkImg from './assets/svg/vk.svg';
import ghImg from './assets/svg/gh.svg';
import lnImg from './assets/svg/ln.svg';
import tmImg from './assets/svg/tm.svg';



export type TitlePropsType = {
  title: string
  subtitle: string
}

export type JobsPropsType = {
  id: string
  background: string
  title: string
  description: string
  url: string
  filter: string
}

export type LogoType = {
    id: string
    url: string
    background: string
}



const TITLE_DATA: TitlePropsType[] = [
  {title: "SKILLS", subtitle: "ANY TASK"},
  {title: "JOBS", subtitle: "LATEST PROJECTS"},
  {title: "CONTACTS", subtitle: "GET IN TOUCH"},
]

const JOBS_CARDS: JobsPropsType[] = [
  {  id: v1(),
    filter: "react",
    background: todoImg,
    title: "Todolist",
    description: "It looks like an ordinary Todolist, but this is only at first glance, if you open the code, you can see all the most modern approaches to developing web applications using the ReactJS and Redux libraries.",
    url: "https://magistblr.github.io/todo_ts/",
  },
  {  id: v1(),
    filter: "react",
    background: counterImg,
    title: "Counter",
    description: "Сounter written in ReactJS and Redux libraries.",
    url: "https://magistblr.github.io/counter/",
  },
  {  id: v1(),
    filter: "react",
    background: "",
    title: "Social network",
    description: "The slightly outdated syntax of this application does not in any way affect the concept and architectural decisions that are used in modern development. Written in ReactJS and Redux libraries.",
    url: "https://magistblr.github.io/social_ts/",
  },
  {  id: v1(),
    filter: "js",
    background: "",
    title: "Pulse",
    description: "Dynamic site with the possibility of feedback. The logic is written in JS and the JQuery library",
    url: "https://magistblr.github.io/todo_ts/",
  },
  {  id: v1(),
    filter: "js",
    background: weatherImg,
    title: "Wheather app",
    description: "Written in native JS. The API is used as the Weather API. You can find out the current weather at the moment.",
    url: "https://magistblr.github.io/test_2/",
  },
  {  id: v1(),
    filter: "html/css",
    background: uberImg,
    title: "Uber",
    description: "Landing page for Uber company. Layout only, without JS.",
    url: "https://magistblr.github.io/uber/",
  }
]


const LOGO_DATA: LogoType[] = [
  {
    id: v1(),
    url: "https://vk.com/id18059665",
    background: vkImg,
  },
  {
    id: v1(),
    url: "https://github.com/magistblr",
    background: ghImg,
  },
  {
    id: v1(),
    url: "https://www.linkedin.com/in/yefeshin-maxim-095525210/",
    background: lnImg,
  },
  {
    id: v1(),
    url: "https://t.me/magistblr",
    background: tmImg,
  },
]



export const App: React.FC<TitlePropsType & JobsPropsType> = () => {

  let [filter, setFilter] = useState("all")

  let filteredCards = JOBS_CARDS;


  if (filter === "react") {
    filteredCards = JOBS_CARDS.filter(item => item.filter === "react");
  }
  if (filter === "js") {
    filteredCards = JOBS_CARDS.filter(item => item.filter === "js");
  }
  if (filter === "html/css") {
    filteredCards = JOBS_CARDS.filter(item => item.filter === "html/css");
  }

  const changeFilter = (value: string) => {
    setFilter(value)
  }




  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Skills title={TITLE_DATA[0].title} subtitle={TITLE_DATA[0].subtitle}/>
      <Jobs title={TITLE_DATA[1].title} subtitle={TITLE_DATA[1].subtitle} cards={filteredCards} callBack={changeFilter} filter={filter}/>
      <Contacts title={TITLE_DATA[2].title} subtitle={TITLE_DATA[2].subtitle}/>
      <Footer logo={LOGO_DATA}/>
    </div>
  );
}

