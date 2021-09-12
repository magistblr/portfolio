import React from 'react'
import s from './nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {


    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
      setScroll(window.scrollY);
    };
  
    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    console.log(scroll);
    

  return (
    <nav  className={scroll < 1 ? s.nav : `${s.nav} ${s.nav_active}`}>
        <div>
          <ul className={s.navbar}>
            <Link
                className={s.nav_item}
                activeClass={s.active}
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
            >
              Home
            </Link>
            <Link
                className={s.nav_item}
                activeClass={s.active}
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
            >
              About
            </Link>
            <Link
                className={s.nav_item}
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
            >
              Skills
            </Link>

            <Link
                className={s.nav_item}
                activeClass={s.active}
                to="jobs"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
            >
              Jobs
            </Link>
            <Link
                className={s.nav_item}
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
            >
              Contacts
            </Link>

          </ul>
        </div>
    </nav>
  )
}
