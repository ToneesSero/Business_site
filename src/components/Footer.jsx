import React from 'react'
import '../styles/scss/Footer.scss'

import logo from '../image/logo.svg'
import facebookImage from '../image/footer/facebook.svg'
import youtubeImage from '../image/footer/youtube.svg'
import instagramImage from '../image/footer/instagram.svg'
import twitterImage from '../image/footer/twitter.svg'

import { useScrollToElement } from '../hooks/useScrollToElement'

export default function Footer({mainRef}) {

    const scrollTo = useScrollToElement(mainRef)
    

  return (
    <div className=''>
        <footer>
            <div className="container">
                <div className="footer__logo">
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <div className="footer__social">                        
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener" ><img src={facebookImage} alt="facebook"/></a>    
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener" ><img src={youtubeImage} alt="YouTube"/></a>    
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener" ><img src={instagramImage} alt="instagram"/></a>    
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener" ><img src={twitterImage} alt="twitter"/></a>    
                    </div>
                </div>
                <hr/>
                <div className="footer__desription">
                    <div className="description__column footer__contact-us">
                        <h4 className="info__text__h4 info__text__h4_color_white">Contact US</h4>
                        <p className="info__text__p info__text__p_color_white opacity_half">BRANCH OFFICE</p>
                        <p className="info__text__p info__text__p_color_white">19 avenue Franklin Willings 
                            19901 Boston</p>
                        
                        <p className="info__text__p info__text__p_color_white opacity_half">HEAD OFFICE</p>
                        <p className="info__text__p info__text__p_color_white">19 avenue Franklin Willings 
                            19901 Boston</p>
                    </div>
                    <div className="description__column footer__company">
                        <h4 className="info__text__h4 info__text__h4_color_white ">Company</h4>
                        <p className="info__text__p info__text__p_color_white"> <a onClick={()=>scrollTo('about')}>About us</a></p>
                        <p className="info__text__p info__text__p_color_white"> <a onClick={()=>scrollTo('features')}>Mission</a></p>
                        <p className="info__text__p info__text__p_color_white"><a onClick={()=>scrollTo('benefits')} >Benefits</a>  </p>
                        <p className="info__text__p info__text__p_color_white"><a href="https://www.google.com/" target="_blank" rel="noreferrer noopener">Services</a>  </p>
                    </div>
                    <div className="description__column footer__connect">
                        <h4 className="info__text__h4 info__text__h4_color_white">Connect</h4>
                        <p className="info__text__p info__text__p_color_white" ><a href="mailto:demo@investseed.com">demo@investseed.com</a>  </p>
                        <p className="info__text__p info__text__p_color_white"><a href="tel:+330911000000">+33 (0)9 11 00 00 00</a></p>
                    </div>
                </div>
                <div className="footer__rights">
                    <div className="rights__el">
                        <p className="info__text__p info__text__p_color_white">© All rights reserved – InvestSeed</p>
                    </div>
                    <div className="rights__el">
                        <p className="info__text__p info__text__p_color_white"><a href='https://www.google.com/' target="_blank" rel="noreferrer noopener" >Privacy Policy</a></p>
                        <p className="info__text__p info__text__p_color_white"><a href='https://www.google.com/' target="_blank" rel="noreferrer noopener" > Terms & Conditions</a></p>
                        
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
