import React from 'react';
import { Nav } from '../nav/Nav';
import './header.module.css';
import s from './header.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
        <Nav/>
    </div>
  );
}

