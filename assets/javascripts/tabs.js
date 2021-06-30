'use strict'
let tabs         = document.querySelectorAll('.header__li')


tabs.forEach((oneTabs, i) => {
    tabs[i].addEventListener('click', () => {
        tabs.forEach((oneTabs, i) =>{
            tabs[i].classList.remove('selected')
        })
        tabs[i].classList.add('selected')
    })
})

let tab1          = document.querySelector('#tab1')
let tab2          = document.querySelector('#tab2')

function linkfunctionTab1() {
    window.location.href="#tab1";
    tab1.style.display = 'block'
    tab2.style.display = 'none'
}
function linkfunctionTab2() {
    window.location.href="#tab2";
    tab1.style.display = 'none'
    tab2.style.display = 'block'
}

