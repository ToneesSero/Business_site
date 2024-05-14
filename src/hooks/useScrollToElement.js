import { useRef } from "react"


function useScrollToElement (ref, displacement) { 
    const params= useRef({
        behavior: "smooth",
        block: 'start',
    })    

    const functionScroll = (scrollToId) => {
        const currentBlock = Array.from(ref.current.childNodes).filter(el=>el.id === scrollToId)

        console.log('currentBlock', currentBlock);
        // if child nodes === id => continue
        // useMemo & useCallback        
        if (currentBlock && currentBlock.length>0) {
            if (displacement > 0) {
                const y = currentBlock[0].getBoundingClientRect().top + window.pageYOffset + displacement;
                window.scrollTo({top:y, behavior:'smooth'})
            } 
            else {
                currentBlock[0].scrollIntoView(params.current)
            }
        }
    }
    return functionScroll
}
export {useScrollToElement}






/*
const menuBurger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
if(menu && menuBurger){
    menuBurger.addEventListener('click', ()=>{
        menu.classList.toggle('show');
        menuBurger.classList.toggle('circle');
        body.classList.toggle('lock');
    })
    console.log(menu.children);
    Array.from(menu.children).forEach(menuElement => {
        menuElement.addEventListener('click',()=>{
            menu.classList.toggle('show');
            menuBurger.classList.toggle('circle');
            body.classList.toggle('lock');
        })
    });
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', (e)=>{
        if(anchor.getAttribute('href') !== '#'){
            e.preventDefault();
            const sectionID = anchor.getAttribute('href').substring(1);
            
            document.getElementById(sectionID).scrollIntoView({
                behavior: "smooth",
                block: 'start',
            })
        }
    })
})
*/