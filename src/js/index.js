// Pintar números del 1-99
// Pintar números usuario
// Pintar números pc

const numbersElement = document.getElementById('numbers');

let gameArray = [];
let userArray = [];

const printNumbers = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i < 100; i++) {
    gameArray.push(i);
    const newSpan = document.createElement('span');
    newSpan.textContent = i;
    fragment.append(newSpan);
  }
  numbersElement.append(fragment);
  console.log(gameArray);
};

const generateUserRandomNumber = () => {
  const number = Math.floor(Math.random() * (100 - 1) + 1);
  return number;
};

const printUserNumbers = () => {
  for (let i = userArray.length; i < 15; i++) {
    let userNumber = generateUserRandomNumber();
    if (!userArray.includes(userNumber)) {
      userArray.push(userNumber);
    }
  }
  console.log(userArray);
};

printNumbers();
generateUserRandomNumber();
printUserNumbers();
