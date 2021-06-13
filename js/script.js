import {formToSheets, showGuestFields} from './formManager.js';
import {modal} from './modal.js'

export const showHideDivs = (showArr,hideArr) => {
    showArr ? showArr.forEach(x => x.classList.remove('hidden')) : '';
    hideArr ? hideArr.forEach(x => x.classList.add('hidden')) : '';
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#main-nav');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click',() => {
        //Toggle Nav            
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.1}s`;
            }
        })
        //Burger Animation
        burger.classList.toggle('toggle')
    })
}




const scrollShowInfo = () => {
   if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
      document.getElementById("new").style.top = "-50px";
   } else {
      document.getElementById("new").style.top = "8vh";
   }
}

const hideInfoBar = () => {
    window.onscroll = scrollShowInfo;
    window.ontouchmove = scrollShowInfo;
}

const langSwitch = () => {
    const langButton = document.querySelector('.tgl-btn');
    const textES = document.querySelectorAll('.es');
    const textEN = document.querySelectorAll('.en');
    const userLang = navigator.language || navigator.userLanguage || navigator.browserLanguage;
    const spanishLangOptions = ["es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
    "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
    "es-PR"];
    let show,hide;

    if (spanishLangOptions.includes(userLang)) {
        show = textES;
        hide = textEN;
    } else {
        show = textEN;
        hide = textES;
    }

    showHideDivs(show,hide);

    langButton.addEventListener('click',() => {
        textES.forEach(x => x.classList.toggle('hidden'));
        textEN.forEach(x => x.classList.toggle('hidden'));
    })

    
}


const app = () => {
    navSlide();
    langSwitch();
    formToSheets();
    showGuestFields();
    modal();
    hideInfoBar();
}

app();
