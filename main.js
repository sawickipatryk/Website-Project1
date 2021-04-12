// Burger

const burger = document.querySelector('.menu__burger-box');
const menuItems = document.querySelector('.menu__items');
const menuBar = document.querySelector('.menu')


const openBurger = () =>{
menuItems.classList.toggle('open');
}

burger.addEventListener('click', openBurger);

// Close Burger

const links = document.querySelectorAll('.menu__item');

links.forEach(link=>{
    link.addEventListener('click',() =>{
        if(menuItems.classList.contains('open')){
            menuItems.classList.remove('open')
        }
    })
})

// Sticky Menu 

const stickyMenu = () =>{
if(window.pageYOffset >= 50){
    menuBar.classList.add('sticky')
}
else {
    menuBar.classList.remove('sticky')
}
}

window.addEventListener('scroll',stickyMenu)

// Banner slider

const descriptions = ['Present Your','We get you choice'];
const spanDescriptions = ['Work In Free Style','Freedom of choice'];
const title = document.querySelector('.banner__title');
const spanTitle = document.querySelector('.banner__span');
const rightArrow = document.querySelector('.banner__rightarrow');
const leftArrow = document.querySelector('.banner__leftarrow');

activeBanner = 0;

const slider = () => {
    title.textContent = descriptions[activeBanner];
    spanTitle.textContent = spanDescriptions[activeBanner];
    console.log(spanTitle.textContent)
}

const nextSlide = ()=>{
    activeBanner++;
    if(activeBanner === descriptions.length){
        activeBanner = 0;
    }
        console.log(activeBanner)
    title.textContent = descriptions[activeBanner];
    spanTitle.textContent = spanDescriptions[activeBanner];
}
const previousSlide = ()=>{
    activeBanner--;
    if(activeBanner < 0){
        activeBanner = descriptions.length - 1 
    }
    console.log(activeBanner)
        title.textContent = descriptions[activeBanner];
        spanTitle.textContent = spanDescriptions[activeBanner];
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', previousSlide);

window.addEventListener('DOMContentLoaded',()=>{
    slider();
})

// Works tabs

const workContainer = document.querySelector('.works__container');
const workBtns = document.querySelectorAll('.works__item');
const imgs = document.querySelectorAll('.works__img');
const wokrImg = document.querySelector('.works__imgs')

workBtns.forEach(workBtn=>{
    workBtn.addEventListener('click',(e)=>{
        console.log(e.target.dataset)
        const id = e.target.dataset.options.toLowerCase();
        let choices = [...imgs];
          console.log(id)
        if(id === 'all'){
        wokrImg.textContent = '';
        choices.forEach(choice=> wokrImg.appendChild(choice));
        }else{
        let choices = [...imgs];
        choices = choices.filter(choice => choice.getAttribute('data-options').toLowerCase().includes(id));
        wokrImg.textContent = '';
        choices.forEach(choice=> wokrImg.appendChild(choice));}
    }
    )
})
