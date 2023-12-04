// Pintar números del 1-99 ✅
// Pintar números usuario 15 ✅
// Pintar números pc 15 ✅
// Evento empezar juego ✅
// Añadir datasets a los 3 bloques de números ✅
// Los números que vayan saliendo se pintan de naranja en el tablero, hasta que una de las 2 listas esté llena
// Si los números del usuario o del PC coinciden con los del tablero, se iluminan en verde
// Los que vayan coincidiendo los incluimos en un nuevo array para cada uno
// Cuando alguno de esos arrays lleguen a 15, ha ganado o el usuario o el pc

import { startGameElement, numberTextElement } from './dom';
import { printNumbers, checkNumbers } from './functions';

startGameElement.addEventListener('click', () => {
  checkNumbers();
  startGameElement.classList.add('hide');
  numberTextElement.classList.replace('hide', 'flex');
});
printNumbers();
