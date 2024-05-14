import React, {useRef} from 'react'
import logo from '../image/logo.svg'
import '../styles/scss/Header.scss'
import ButtonToUrl from '../UI/ButtonToUrl/ButtonToUrl'
import { useScrollToElement } from '../hooks/useScrollToElement'
import { useBurgerMenu } from '../hooks/useBurgerMenu'

export default function Header ({mainRef})  {
    
    const menuRef = useRef()
    const burgerRef = useRef()

    const scrollTo = useScrollToElement(mainRef)
    const [toggleMenuBurger, offMenuBurger] = useBurgerMenu(burgerRef, menuRef, mainRef)
    


  return (
    <div className='header'>

        <div className="container container_flex">
            <div className="logo">
                <a href="/"> <img className="logo__img" src={logo} alt="logo"/></a>
             </div>
             <div className="menu__icon" ref={burgerRef} onClick={toggleMenuBurger}>
                <span></span>
                <span></span>
                <span></span>
             </div>
             <nav className="menu menu_horisontal " ref={menuRef}>
                <div className="menu__item" onClick={offMenuBurger}>
                    <h4 className="menu__item__text menu__item__text_color_grey" onClick={()=>{scrollTo('about')}}>About Us</h4>
                </div>
                <div className="menu__item" onClick={offMenuBurger} >
                    <h4 className="menu__item__text menu__item__text_color_grey" onClick={()=>{scrollTo('features')}}>  Mission</h4>
                </div>
                <div className="menu__item" onClick={offMenuBurger} >
                    <h4 className="menu__item__text menu__item__text_color_grey" onClick={()=>{scrollTo('benefits')}}> Benefits  </h4>
                </div>
                <div className="menu__item" onClick={offMenuBurger} >
                    <h4 className="menu__item__text menu__item__text_color_grey" onClick={()=>{scrollTo('video')}}> Testimonials  </h4>
                </div>
                <div className="menu__item" onClick={offMenuBurger} >
                    <h4 className="menu__item__text menu__item__text_color_grey" onClick={()=>{scrollTo('contactUs')}}>  Contact us</h4>
                </div>
                <div className="menu__item" onClick={offMenuBurger} >
                    <ButtonToUrl bgColor={'black'} url={"https://www.google.com/"}> Book a demo </ButtonToUrl>
                </div>
             </nav>
        </div>         
    </div>
  )
}
