import React from 'react'
import logo from '../image/logo.svg'
import '../styles/scss/Header.scss'
import ButtonToUrl from '../UI/ButtonToUrl/ButtonToUrl'

export default function Header() {
  return (
    <div className='header'>

        <div class="container container_flex">
            <div class="logo">
                <a href="/"> <img class="logo__img" src={logo} alt="logo"/></a>
             </div>
             <div class="menu__icon">
                <span></span>
                <span></span>
                <span></span>
             </div>
             <nav class="menu menu_horisontal ">
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"><a href="#about">About Us</a></h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"> <a href="#features">Mission</a></h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"><a href="#benefits">Benefits</a>  </h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"><a href="#video">Testimonials</a>  </h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"> <a href="#contactUs">Contact us</a></h4>
                </div>
                <div class="menu__item">
                    <ButtonToUrl bgColor={'black'} url={"https://www.google.com/"}> Book a demo </ButtonToUrl>
                </div>
             </nav>
        </div>         
    </div>
  )
}
