// This is the entrypoint for javascript
// Import all your js files here
// ...
'use strict'; 

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

let divs         = document.querySelectorAll('.tab1__div')
let radio        = document.querySelectorAll('.radio')

function getValue(radio) {
  console.log(radio.value);
}
function checked(){
  divs.forEach((oneDivs, i) => {
    divs[i].addEventListener('click', () => {
        divs.forEach((oneDivs, i) =>{
            divs[i].classList.remove('selected')
        })
        divs[i].classList.add('selected')
    })
  })
  radio.forEach((oneradio, i) => {
    radio[i].addEventListener('click', () => {
        radio.forEach((oneradio, i) =>{
            radio[i].classList.remove('selected')
        })
        radio[i].classList.add('selected')
    })
  })
  if (divs.selected = '2px solid $c-primar-hover')
  {
      // getValue(radio);
      console.log("heloooo")
  }
}

var fila = document.querySelectorAll('.tab2__fila');

fila.forEach(function (cadaFila, i) {
  fila[i].addEventListener('click', function () {
    fila.forEach(function (cadaFila, i) {
      fila[i].classList.remove('open');
    });
    fila[i].classList.add('open');
  });
});

var subfila1 = document.querySelectorAll('.op1');

subfila1.forEach(function (cadaFila, i) {
  subfila1[i].addEventListener('click', function () {
    subfila1.forEach(function (cadasubFila1, i) {
      subfila1[i].classList.toggle('ver');
    });
  });
});

var subfila2 = document.querySelectorAll('.op2');

subfila2.forEach(function (cadaFila, i) {
  subfila2[i].addEventListener('click', function () {
    subfila2.forEach(function (cadasubFila2, i) {
      subfila2[i].classList.toggle('ver');
    });
  });
});