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


  const [burger, setBurger] = React.useState(false);

  const onChangeBurger = () => {
    setBurger(!burger)
  }



  return (
<div>
    <nav  className={scroll < 1 ? s.nav : `${s.nav} ${s.nav_active}`}>
      <div onClick={()=> {onChangeBurger()}} className={s.burger}>
        <div className={burger ? `${s.line_1} ${s.line_1_active}` : s.line_1}></div>
        <div className={burger ? `${s.line_2} ${s.line_2_active}` : s.line_2}></div>
        <div className={burger ? `${s.line_3} ${s.line_3_active}` : s.line_3}></div>
      </div>
        <div className={burger ? `${s.burgerSlide} ${s.burgerSlide_active}` : s.burgerSlide}>
          <ul className={burger ? `${s.navbar} ${s.navbar_burger_active}` : s.navbar}>
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
    </div>
  )
}
