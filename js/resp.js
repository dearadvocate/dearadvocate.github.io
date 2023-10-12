burger = document.querySelector('.burger')
secondpart = document.querySelector('.secondpart')
navList = document.querySelector('.nav-list');


burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
})