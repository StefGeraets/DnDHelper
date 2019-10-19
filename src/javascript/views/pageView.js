import { elements } from './base';

const showTab = (tabToShow, tabToRemove) => {
  elements[tabToRemove].classList.remove('end');
  elements[tabToRemove].classList.add('out');
  elements[tabToRemove].addEventListener('animationend', (e) => {
    if (e.animationName === 'animate-out') {
      elements[tabToRemove].classList.remove('active', 'out');
      elements[tabToShow].classList.add('active');
    }
  });
  elements[tabToShow].addEventListener('animationend', (e) => {
    if (e.animationName === 'animate-in') {
      elements[tabToShow].classList.add('end');
    }
  })

}

export const showDiceTab = () => {
  elements.initiativeBtn.classList.remove('active');
  elements.diceBtn.classList.remove('active');
  elements.diceBtn.classList.add('active');
  if (!elements.diceTab.classList.contains('active')) {
    showTab('diceTab', 'initiativeTab');
  }
}

export const showInitiativeTab = () => {
  elements.diceBtn.classList.remove('active');
  elements.initiativeBtn.classList.remove('active');
  elements.initiativeBtn.classList.add('active');
  if (!elements.initiativeTab.classList.contains('active')) {
    showTab('initiativeTab', 'diceTab');
  }
}