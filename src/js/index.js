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

//FINAL
let userScore = 0;
let pcScore = 0;

//GENERATE RANDOM NUMBER
const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * (gameArray.length - 1) + 1);
  return number;
};

//PRINT PLAYERS NUMBERS
const printPlayersNumbers = (fragment, number, containerElement) => {
  const newSpan = document.createElement('span');
  newSpan.classList.add('span-players');
  newSpan.textContent = number;
  newSpan.dataset.number = number;
  fragment.append(newSpan);
  containerElement.append(fragment);
};

//GENERATE USER NUMBERS
const generateUserNumbers = () => {
  const fragment = document.createDocumentFragment();
  while (userArray.length < 15) {
    let number = generateRandomNumber();
    if (!userArray.includes(number)) {
      userArray.push(number);
      printPlayersNumbers(fragment, number, userCardElement);
    }
  }
};

//GENERATE PC NUMBERS
const generatePcNumbers = () => {
  const fragment = document.createDocumentFragment();
  while (pcArray.length < 15) {
    let number = generateRandomNumber();
    if (!pcArray.includes(number)) {
      pcArray.push(number);
      printPlayersNumbers(fragment, number, pcCardElement);
    }
  }
};

//PRINT BOARD NUMBERS
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
  generateUserNumbers();
  generatePcNumbers();
};

//CHECK USER NUMBERS
const checkUserNumbers = () => {
  const intervalId = setInterval(() => {
    const randomNumber = generateRandomNumber(); //el primer número aleatorio del tablero
    const number = gameArray[randomNumber];

    const boardNumber = document.querySelector(
      `span[data-board = '${randomNumber}']`
    );
    const userNumber = document.querySelector(
      `span[data-number = '${randomNumber}']`
    );
    const pcNumber = document.querySelector(
      `span[data-number= '${randomNumber}']`
    );

    if (boardNumber) {
      gameArray.splice(number, 1);
      boardNumber.classList.add('orange');
      if (pcNumber && boardNumber.dataset.board === pcNumber.dataset.number) {
        pcNumber.classList.add('green');
        pcScore++;
      } else if (
        userNumber &&
        boardNumber.dataset.board === userNumber.dataset.number
      ) {
        userNumber.classList.add('green');
        userScore++;
      }
    }
    console.log(pcScore);
    console.log(userScore);

    if (userScore === 15 || pcScore === 15) {
      checkWinner();
      clearInterval(intervalId);
    }
  }, 200);
};

const checkWinner = () => {
  console.log('hola');
};

startGameElement.addEventListener('click', () => {
  checkUserNumbers();
});
printNumbers();
