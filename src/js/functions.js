import {
  numbersElement,
  userCardElement,
  pcCardElement,
  numberTextElement,
  resultElement,
} from './dom';

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
export const printNumbers = () => {
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
  generateUserNumbers();
  generatePcNumbers();
};

//CHECK NUMBERS
export const checkNumbers = () => {
  const intervalId = setInterval(() => {
    const randomNumber = generateRandomNumber(); //el primer número aleatorio del tablero
    const number = gameArray[randomNumber];

    const boardNumber = document.querySelector(
      `span[data-board = '${number}']`
    );
    const userNumber = userCardElement.querySelector(
      `span[data-number = '${number}']`
    );
    const pcNumber = pcCardElement.querySelector(
      `span[data-number = '${number}']`
    );

    if (boardNumber) {
      gameArray.splice(randomNumber, 1);
      boardNumber.classList.add('orange');
      numberTextElement.textContent = `Número: ${number}`;
      if (pcNumber && boardNumber.dataset.board === pcNumber.dataset.number) {
        pcNumber.classList.add('green');
        pcScore++;
      }
      if (
        userNumber &&
        boardNumber.dataset.board === userNumber.dataset.number
      ) {
        userNumber.classList.add('green');
        userScore++;
      }
    }

    if (userScore === 15 || pcScore === 15) {
      checkWinner();
      clearInterval(intervalId);
    }
  }, 200);
};

const checkWinner = () => {
  resultElement.textContent = `${
    userScore === 15 ? 'has ganado' : 'ha ganado el pc'
  }`;
};
