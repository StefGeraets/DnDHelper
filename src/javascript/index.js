/**
 * Styles
 */ 
import '../scss/styles.scss';


/**
 * Scripts
 */
// style helpers
import './helpers/form';

// models
import List from './models/list';

// controllers
import * as diceCtrl from './controller/diceController';
import * as characterCtrl from './controller/characterController';
import * as listCtrl from './controller/listController';

// views
import * as diceUI from './views/diceView';
import * as charUI from './views/characterView';
import * as listUI from './views/listView';
import * as pageUI from './views/pageView';

import { elements, data } from './views/base';

/**
 * DICE EVENT LISTENERS
 */
function diceListeners() {
  const forms = [
    { die: d4, value: 4 },
    { die: d6, value: 6 },
    { die: d8, value: 8 },
    { die: d10, value: 10 },
    { die: d12, value: 12 },
    { die: d20, value: 20 },
    { die: d100, value: 100 }
  ]

  forms.forEach(obj => {
    obj.die.addEventListener('submit', function (e) {
      e.preventDefault();
      var roll = diceCtrl.submitDice(obj.value);
      if (!roll.tooMuch) {
        diceUI.renderDiceroll(roll.diceValue, roll.amount, roll.total, roll.totalArray);
      } else {
        diceUI.rollTooMuch(roll.diceValue, roll.amount);
      }
    })
  })
}

/**
 * CHARACTER FORM EVENT LISTENERS
 */
function characterListeners() {

  elements.nameInput.addEventListener('focus', charUI.removeError)
  elements.healthInput.addEventListener('focus', charUI.removeError)
  elements.initiativeInput.addEventListener('focus', charUI.removeError)

  addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const type = this.dataset.type;
    const name = elements.nameInput.value;
    const health = elements.healthInput.value;
    const initiative = elements.initiativeInput.value;


    if (characterCtrl.checkCharacter(name, health, initiative)) {
      characterCtrl.makeCharacter(type, name, health, initiative);
      charUI.resetForm(elements.nameInput, elements.healthInput, elements.initiativeInput);
      listCtrl.sortCharacterList();
      if (data.list === '') {
        data.list = new List(data.characters);
      } else {
        data.list.charCount = data.characters.length;
      };
      data.list.reset();
      listUI.updateCharacterList();
    } else {
      charUI.checkInput(name, elements.nameInput);
      charUI.checkInput(health, elements.healthInput);
      charUI.checkInput(initiative, elements.initiativeInput);
    }
  });
}

/**
 * LIST EVENT LISTENERS
 */
function listListeners() {
  clear.addEventListener('click', listCtrl.clearData);

  nextTurn.addEventListener('click', listCtrl.nextTurn);
  prevTurn.addEventListener('click', listCtrl.prevTurn);

  elements.characterList.addEventListener('click', function (event) {
    if (event.target.classList.contains('hp')) {
      var charItemId;
      if (event.target.classList.contains('health')) {
        charItemId = event.target.parentNode.parentNode.id
      } else {
        charItemId = event.target.parentNode.parentNode.parentNode.id
      }
      charUI.toggleHealth(charItemId);
    }
  })

  window.incHealth = (elementID) => {
    const healthValue = parseInt(document.querySelector(`#${elementID} input`).value);
    console.log(healthValue);
    if (!isNaN(healthValue)) {
      charUI.changeHealth(elementID, 'inc');
    }
  }
  window.decHealth = (elementID) => {
    const healthValue = parseInt(document.querySelector(`#${elementID} input`).value);
    if (!isNaN(healthValue)) {
      charUI.changeHealth(elementID, 'dec');
    }
  }
}

/**
 * PAGE EVENT LISTENERS
 */
const pageListeners = () => {
  elements.infoButton.addEventListener('click', () => {
    elements.overlay.classList.toggle('active');
    elements.infoButton.firstChild.nextSibling.classList.toggle('fa-info');
    elements.infoButton.firstChild.nextSibling.classList.toggle('fa-times');
  });
  elements.overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      elements.overlay.classList.toggle('active');
      elements.infoButton.firstChild.nextSibling.classList.toggle('fa-info');
      elements.infoButton.firstChild.nextSibling.classList.toggle('fa-times');
    }
  })

  elements.initiativeBtn.addEventListener('click', (e) => {
    pageUI.showInitiativeTab('initiative');
  });
  elements.diceBtn.addEventListener('click', (e) => {
    pageUI.showDiceTab('dice');
  })

  elements.openFormBtn.addEventListener('click', (e) => {
    if(elements.openFormBtn.classList.contains('open')) {
      charUI.hideForm();
      elements.openFormBtn.classList.remove('open');
    } else {
      charUI.showForm();
      elements.openFormBtn.classList.add('open');
    }
  })

  var width = window.matchMedia("(max-width: 992px)")

  function checkScreenwidth(x) {
    if (x.matches) { // small screen
      elements.characterForm.classList.add('hidden');
    } else { // Big screen
      elements.initiativeTab.classList.remove('hide');
      elements.characterForm.classList.remove('hidden');
    }
  }


  if (!elements.body.classList.contains('checkout-index-index')) {
    checkScreenwidth(width);
    width.addListener(checkScreenwidth)
  }
}


window.addEventListener('load', () => {
  diceListeners();
  characterListeners();
  listListeners();
  pageListeners();
  console.log('App loaded');
})

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}