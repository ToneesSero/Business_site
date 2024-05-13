import React, { useEffect, useRef } from 'react'
import arrowImg from '../../image/Arrow.svg'
import classes from'../Button/Button.module.css'

export default function ButtonToUrl({children, withArrow, bgColor, url, ...props}) {
  
  let buttonRef = useRef()
  useEffect(() => {
    if(bgColor && buttonRef.current){
      buttonRef.current.style.backgroundColor = `var(--${bgColor}-button-bg)`
      buttonRef.current.style.color = `var(--${bgColor}-button-font-color)`
    }
  }, [])
 
  return (
    <a href={url} target='_blank' rel="noreferrer noopener">
        <button className={withArrow? [classes.button, classes.buttonWithArrow].join(' ') : classes.button} ref={buttonRef} {...props}>
            
            {children}
            {
                withArrow
                ? <img src={arrowImg} alt="arrow right"/>
                :''
            }
        </button>
    </a>
  )
}
