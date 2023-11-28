// Pintar números del 1-99 ✅
// Pintar números usuario 15 ✅
// Pintar números pc 15 ✅
// Evento empezar juego ✅
// Añadir datasets a los 3 bloques de números ✅
// Los números que vayan saliendo se pintan de naranja en el tablero, hasta que una de las 2 listas esté llena
// Si los números del usuario o del PC coinciden con los del tablero, se iluminan en verde
// Los que vayan coincidiendo los incluimos en un nuevo array para cada uno
// Cuando alguno de esos arrays lleguen a 15, ha ganado o el usuario o el pc

const numbersElement = document.getElementById('numbers');
const userCardElement = document.getElementById('user-card');
const pcCardElement = document.getElementById('pc-card');
const startGameElement = document.getElementById('start-game');

//ARRAYS INICIALES
let gameArray = [];
let userArray = [];
let pcArray = [];

//ARRAYS FINALES
let userResultArray = [];
let pcResultArray = [];

//RANDOM NUMBER
const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * (gameArray.length - 1) + 1);
  return number;
};

//USER NUMBERS
const printUserNumbers = () => {
  const fragment = document.createDocumentFragment();
  while (userArray.length < 15) {
    let number = generateRandomNumber();
    if (!userArray.includes(number)) {
      userArray.push(number);
      const newSpan = document.createElement('span');
      newSpan.classList.add('span-players');
      newSpan.textContent = number;
      newSpan.dataset.user = number;
      fragment.append(newSpan);
    }
  }
  userCardElement.append(fragment);
  console.log(userArray);
};

//PC NUMBERS
const printPcNumbers = () => {
  const fragment = document.createDocumentFragment();
  while (pcArray.length < 15) {
    let number = generateRandomNumber();
    if (!pcArray.includes(number)) {
      pcArray.push(number);
      const newSpan = document.createElement('span');
      newSpan.classList.add('span-players');
      newSpan.textContent = number;
      newSpan.dataset.pc = number;

      fragment.append(newSpan);
    }
  }
  pcCardElement.append(fragment);

  console.log(pcArray);
};

//BOARD NUMBERS
const printNumbers = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i < 100; i++) {
    gameArray.push(i);
    const newSpan = document.createElement('span');
    newSpan.classList.add('span-game');
    newSpan.textContent = i;
    newSpan.dataset.board = i;
    fragment.append(newSpan);
  }
  numbersElement.append(fragment);
  console.log(gameArray);
  printUserNumbers();
  printPcNumbers();
};

//CHECK BOARD NUMBERS
const colorBoard = param => {
  const boardNumber = document.querySelector(`span[data-board = '${param}']`);
  boardNumber.classList.add('orange');
};

//CHECK USER NUMBERS
const checkUserNumbers = () => {
  const randomNumber = generateRandomNumber(); //el primer número aleatorio del tablero

  colorBoard(randomNumber);

  if (userArray.includes(randomNumber)) {
    const userNumber = document.querySelector(
      `span[data-user = '${randomNumber}']`
    );
    userNumber.classList.add('green');
    userResultArray.push(randomNumber);
    console.log('USER' + userResultArray);
  }
  if (pcArray.includes(randomNumber)) {
    const pcNumber = document.querySelector(`span[data-pc= '${randomNumber}']`);
    pcNumber.classList.add('green');
    pcResultArray.push(randomNumber);
    console.log('PC' + pcResultArray);
  }

  if (userResultArray.length === 15 || pcResultArray.length === 15) {
    checkWinner();
    return;
  }
};

const checkWinner = () => {
  console.log('hola');
  console.log(userResultArray);
  console.log(pcResultArray);
};

startGameElement.addEventListener('click', () => {
  checkUserNumbers();
});
printNumbers();
