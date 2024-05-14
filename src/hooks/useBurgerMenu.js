

function useBurgerMenu (refBurgerMenu, refMenu, refBody){
    const menuBurger = refBurgerMenu.current;
    const menu = refMenu.current;
    const body = refBody.current;

    function offMenuBurger(){
        if(menu && menuBurger){
            menu.classList.toggle('show');
            menuBurger.classList.toggle('circle');
            body.classList.toggle('lock');
        }
    }

    function toggleMenuBurger(){
        if(menu && menuBurger){
            menu.classList.toggle('show');
            menuBurger.classList.toggle('circle');
            body.classList.toggle('lock');
        }
    }

    return [toggleMenuBurger, offMenuBurger]
    
}

export {useBurgerMenu}