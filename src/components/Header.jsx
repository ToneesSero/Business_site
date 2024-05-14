import React from 'react'
import logo from '../image/logo.svg'
import '../styles/scss/Header.scss'
import ButtonToUrl from '../UI/ButtonToUrl/ButtonToUrl'
import { useScrollToElement } from '../hooks/useScrollToElement'

export default function Header ({mainRef})  {
    

    const scrollTo = useScrollToElement(mainRef)
    


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
                    <h4 class="menu__item__text menu__item__text_color_grey"><a onClick={()=>{scrollTo('about')}}>About Us</a></h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"> <a onClick={()=>{scrollTo('features')}} >Mission</a></h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"><a onClick={()=>{scrollTo('benefits')}} >Benefits</a>  </h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"><a onClick={()=>{scrollTo('video')}} >Testimonials</a>  </h4>
                </div>
                <div class="menu__item">
                    <h4 class="menu__item__text menu__item__text_color_grey"> <a onClick={()=>{scrollTo('contactUs')}} >Contact us</a></h4>
                </div>
                <div class="menu__item">
                    <ButtonToUrl bgColor={'black'} url={"https://www.google.com/"}> Book a demo </ButtonToUrl>
                </div>
             </nav>
        </div>         
    </div>
  )
}
