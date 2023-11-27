import { palabrasWordle } from './words';
import { wordsElement, inputElement, popupElement } from './dom';

let round = 0;
let chosenWord;

const isLetterOnWord = () => {
  const userWord = inputElement.value;
  console.log(chosenWord);

  for (let i = 0; i < userWord.length; i++) {
    const userLetter = userWord[i];
    const correctLetter = chosenWord[i];
    const spanElement = wordsElement[round].children[i];

    if (userLetter === correctLetter) {
      spanElement.style.backgroundColor = 'green';
    } else if (chosenWord.includes(userLetter)) {
      spanElement.style.backgroundColor = 'orange';
    } else {
      spanElement.style.backgroundColor = '';
    }
  }
  round++;
};

const printUserWord = () => {
  for (let i = 0; i < inputElement.value.length; i++) {
    wordsElement[round].children[i].textContent = inputElement.value[i];
  }
  isLetterOnWord();
};

export const validateWordLength = () => {
  if (inputElement.value.length > 5 || inputElement.value.length < 5) {
    popupElement.classList.replace('hide', 'flex');
    setTimeout(() => {
      popupElement.classList.replace('flex', 'hide');
    }, 1000);
  } else {
    printUserWord();
    inputElement.value = '';
  }
};

const chooseWord = () => {
  if (!chosenWord) {
    const randomNumber = Math.floor(Math.random() * palabrasWordle.length);
    chosenWord = palabrasWordle[randomNumber];
  }
};

export const displayLetters = () => {
  for (let i = 0; i < wordsElement.length; i++) {
    const fragment = document.createDocumentFragment();
    for (let j = 0; j < palabrasWordle[i].length; j++) {
      const newSpan = document.createElement('span');
      newSpan.classList.add('letter');
      fragment.append(newSpan);
    }
    wordsElement[i].append(fragment);
  }
  chooseWord();
};
