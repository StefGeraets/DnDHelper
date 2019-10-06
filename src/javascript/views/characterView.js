import { data } from './base';
import * as charCtrl from '../controller/characterController';

export const resetForm = (nameInput, healthInput, initiativeInput) => {
  addForm.parentElement.classList.add('hidden');
  setTimeout(function (e) {
    nameInput.value = ''
    healthInput.value = ''
    initiativeInput.value = ''
    nameInput.parentElement.classList.remove('focused')
    healthInput.parentElement.classList.remove('focused')
    initiativeInput.parentElement.classList.remove('focused')
  }, 400);
}

export const checkInput = (value, valueInput) => {
  if (value === '') {
    valueInput.classList.add('error');
  } else {
    valueInput.classList.remove('error');
  }
}

export const removeError = (element) => {
  if (element.target.classList.contains('error')) {
    element.target.classList.remove('error');
  }
}

export const toggleHealth = (elementID) => {
  const charElement = document.getElementById(elementID);
  charElement.classList.toggle('open');
}

export const openHealth = (elementID) => {
  const charElement = document.getElementById(elementID);
  charElement.classList.add('open');
}

export const closeHealth = (elementID) => {
  const charElement = document.getElementById(elementID);
  charElement.classList.remove('open');
}

export const changeHealth = (charID, incDec) => {
  var charElement = document.getElementById(charID);
  const thisCharacter = charCtrl.findCharacter(charID);

  const healthValue = parseInt(document.querySelector(`#${charID} input`).value);

  if (incDec === 'inc') {
    thisCharacter.increaseHealth(healthValue);
  } else if (incDec === 'dec') {
    thisCharacter.decreaseHealth(healthValue);
  }

  if (thisCharacter.health <= 0) {
    thisCharacter.dead = true;
    thisCharacter.health = 0;
    charElement.classList.add('death');
  }

  document.querySelector(`#${charID} input`).value = '';
  document.querySelector(`#${charID} .healthPoints`).textContent = thisCharacter.health;
  closeHealth(charID);
}