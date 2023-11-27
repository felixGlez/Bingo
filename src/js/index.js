// Mostrar tantos cuadrados como letras tengamos
// Hacer que el form no se envíe
// Elegir una palabra aleatoria
// Validar que la palabra enviada sea de 5 letras
// Validar que la palabra del usuario contenga letras
// Añadir la palabra del usuario

import { formElement } from './dom';
import { validateWordLength, displayLetters } from './functions';

formElement.addEventListener('submit', event => {
  event.preventDefault();
  validateWordLength();
});
displayLetters();
