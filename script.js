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
        //behavior for clicking language switch button
        // console.log(textES)
        textES.forEach(x => x.classList.toggle('hidden'));
        textEN.forEach(x => x.classList.toggle('hidden'));
    })

    
}


const app = () => {
    navSlide();
    langSwitch();
}

app();
