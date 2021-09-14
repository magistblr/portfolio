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
    description: "Lorem",
    url: "https://magistblr.github.io/todo_ts/",
  },
  {  id: v1(),
    filter: "react",
    background: "",
    title: "Counter",
    description: "Lorem",
    url: "https://magistblr.github.io/counter/",
  },
  {  id: v1(),
    filter: "react",
    background: "",
    title: "Social network",
    description: "Lorem",
    url: "https://magistblr.github.io/social_ts/",
  },
  {  id: v1(),
    filter: "react",
    background: "",
    title: "Todolist",
    description: "Lorem",
    url: "https://magistblr.github.io/todo_ts/",
  },
  {  id: v1(),
    filter: "js",
    background: "",
    title: "Wheather app",
    description: "Lorem",
    url: "https://magistblr.github.io/test_2/",
  },
  {  id: v1(),
    filter: "html/css",
    background: "",
    title: "Uber",
    description: "Lorem",
    url: "https://magistblr.github.io/uber/",
  }
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
      <Footer/>
    </div>
  );
}

