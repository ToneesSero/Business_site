import React, {useRef, useEffect} from 'react'
import classes from './Card.module.css'

export default function Card({img, title, textAfterTitle, text, description, bgCard, bgTitle}) {

    const card = useRef()
    const cardTitle = useRef()
    const cardTextAfterTitle = useRef()
    const cardText = useRef()
    const cardDescription = useRef()

    useEffect(()=>{
        if(bgCard){
            if (card.current) {
                card.current.style.background = `var(--${bgCard}-card-bg)`;    
                if (bgCard === 'white') {
                    card.current.style.border = `1px solid #b4bbc5`;
                }     
            }            

            if (cardTitle.current) {
                cardTitle.current.style.color = `var(--${bgCard}-card-title)`;            
            }

            if (cardTextAfterTitle.current) {
                cardTextAfterTitle.current.style.color = `var(--${bgCard}-card-title)`;  
                
            }

            if (cardText.current) {
                cardText.current.style.color = `var(--${bgCard}-card-title)`;  
            }

            if (cardDescription.current) {
                cardDescription.current.style.color = `var(--${bgCard}-card-description)`;  
            }
        }
        if (bgTitle) {
            cardTitle.current.style.color = `var(--${bgTitle}-title)` 
        }
    },[bgCard, bgTitle])

    
    return (
        <div className={classes.card} ref={card}>
            {
                img
                ? <img className={classes.img} src={img} alt="img_card"/>
                : ''
            }
            {
                title
                ? <h2 className={classes.title} ref={cardTitle}>{title}</h2>
                : ''
            }
            {
                textAfterTitle
                ? <h1 className={classes.textAfterTitle} ref={cardTextAfterTitle}>{textAfterTitle}</h1>
                : ''
            }
            {
                text
                ? <h3 ref={cardText}>Expirience</h3>
                : ''
            }
            {
                description
                ?<p className={classes.description} ref={cardDescription}>{description}</p>
                : ''
            }
            
        </div>
    )
}
