const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    nav.classList.toggle('nav--active');

    navBtnBars.classList.remove('black-bars-color');
    
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })
    
    handleNavItemsAnimation();
}


const handleNavItemsAnimation = () => {
    let delayTime = 0; 
    
    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = "." +delayTime + 's';
        delayTime++;
    })
    
    Array.from(allNavItems).forEach((link) => {
        link.addEventListener("click", deleteAnimation);
    });
    
}

const deleteAnimation = () => {
    allNavItems.forEach(item => {
        item.classList.remove('nav-items-animation')
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

const handleObserver = () => {
    const currentSection = window.scrollY;
    allSection.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.add('black-bars-color');
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.remove('black-bars-color');
    }
})
}

handleCurrentYear();
burgerBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)