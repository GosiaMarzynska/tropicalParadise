const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    nav.classList.toggle('nav--active');
    
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
}

burgerBtn.addEventListener('click', handleNav);