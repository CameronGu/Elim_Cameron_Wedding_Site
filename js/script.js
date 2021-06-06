import {formToSheets} from './formManager.js';

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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        })
        //Burger Animation
        burger.classList.toggle('toggle')
    })
}


const langSwitch = () => {
    const langButton = document.querySelector('.tgl-btn');
    const textES = document.querySelectorAll('.es');
    const textEN = document.querySelectorAll('.en');
    const userLang = navigator.language || navigator.userLanguage || navigator.browserLanguage;
    const spanishLangOptions = ["es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
    "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
    "es-PR"];

    if (spanishLangOptions.includes(userLang)) {
        textEN.forEach(x => x.classList.toggle('hidden'));
    } else {
        textES.forEach(x => x.classList.toggle('hidden'));
    }

    langButton.addEventListener('click',() => {
        textES.forEach(x => x.classList.toggle('hidden'));
        textEN.forEach(x => x.classList.toggle('hidden'));
    })

    
}

const hideExtraGuestsFromForm = () => {
    const guestPicker = document.getElementById('numGuests');
    const guestOne = document.getElementById('guestOne');
    const guestTwo = document.getElementById('guestTwo');
    const guestThree = document.getElementById('guestThree');
    const guestFour = document.getElementById('guestFour');

    guestPicker.addEventListener('change',() => {
        const numGuests = guestPicker.options[guestPicker.selectedIndex].value;
        switch (numGuests) {
            case '1': 
                guestOne.classList.remove('hidden');
                [guestTwo,guestThree,guestFour].forEach(x => x.classList.add('hidden'));
                break;
            case '2':
                [guestOne,guestTwo].forEach(x => x.classList.remove('hidden'));
                [guestThree,guestFour].forEach(x => x.classList.add('hidden'));
                break;
            case '3':
                [guestOne,guestTwo,guestThree].forEach(x => x.classList.remove('hidden'));
                guestFour.classList.add('hidden');
                break;
            case '4':
                [guestOne,guestTwo,guestThree,guestFour].forEach(x => x.classList.remove('hidden'));
                break;
            default:
                console.log('switch case error');
        }
    })
}


const app = () => {
    navSlide();
    langSwitch();
    formToSheets();
    hideExtraGuestsFromForm();
}

app();
