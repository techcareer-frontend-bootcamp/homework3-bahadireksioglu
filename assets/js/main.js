/* show menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav    = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            if(nav.getElementsByTagName('ul')[0].style.display=="block")
                nav.getElementsByTagName('ul')[0].style.display="none";
            else
                nav.getElementsByTagName('ul')[0].style.display="block"            
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
/*const navLink = document.querySelectorAll('.toogle-btn');
console.log(navLink);
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.style.display="none";
}

navLink.forEach(n => n.addEventListener('click', linkAction))*/

