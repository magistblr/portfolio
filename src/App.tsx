import React from 'react';
import './App.css';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Jobs } from './jobs/Jobs';
import { About } from './main/About';
import { Nav } from './nav/Nav';
import { RemoteWork } from './remoteWork/RemoteWork';
import { Skills } from './skills/Skills';



export type TitlePropsType = {
  title: string
  subtitle: string
}

const TITLE_DATA: TitlePropsType[] = [
  {title: "SKILLS", subtitle: "ANY TASK"},
  {title: "JOBS", subtitle: "LATEST PROJECTS"},
  {title: "CONTACTS", subtitle: "GET IN TOUCH"},
]


export const App: React.FC<TitlePropsType> = () => {


  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Skills title={TITLE_DATA[0].title} subtitle={TITLE_DATA[0].subtitle}/>
      <Jobs title={TITLE_DATA[1].title} subtitle={TITLE_DATA[1].subtitle}/>
      <RemoteWork/>
      <Contacts title={TITLE_DATA[2].title} subtitle={TITLE_DATA[2].subtitle}/>
      <Footer/>
    </div>
  );
}

