// This is the entrypoint for javascript
// Import all your js files here
// ...
'use strict'; 
function getValue(radio) {
    console.log(radio.value);
}

var fila = document.querySelectorAll('.acordeon__fila');
fila.forEach(function (cadaFila, i) {
  fila[i].addEventListener('click', function () {
    fila.forEach(function (cadaFila, i) {
      fila[i].classList.remove('ver');
    });
    fila[i].classList.add('ver');
  });
});

let tabs         = document.querySelectorAll('.tabs')
let options      = document.querySelectorAll('.tabset_content')


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

var fila = document.querySelectorAll('.tab2__fila');
fila.forEach(function (cadaFila, i) {
  fila[i].addEventListener('click', function () {
    fila.forEach(function (cadaFila, i) {
      fila[i].classList.remove('ver');
    });
    fila[i].classList.add('ver');
  });
});

var subfila = document.querySelectorAll('.tab2__subop');
subfila.forEach(function (cadaFila, i) {
  subfila[i].addEventListener('click', function () {
    subfila.forEach(function (cadasubFila, i) {
      subfila[i].classList.toggle('ver');
    });
  });
});