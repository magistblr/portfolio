import React from 'react';
import './App.css';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Jobs } from './jobs/Jobs';
import { Main } from './main/Main';
import { RemoteWork } from './remoteWork/RemoteWork';
import { Skills } from './skills/Skills';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Skills/>
    <Jobs/>
    <RemoteWork/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
