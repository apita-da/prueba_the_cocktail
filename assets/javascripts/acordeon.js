'use strict'

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
      subfila[i].classList.remove('ver');
    });
    subfila[i].classList.add('ver');
  });
});