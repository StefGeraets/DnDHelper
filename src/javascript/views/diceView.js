import { elements } from './base';

export const renderDiceroll = (value, amount, total, totalArray) => {
  const diceName = "d" + value.toString() + "Input";
  var critClass = '';
  if (value === 20 && amount === '') {
    if (total === 20) {
      critClass = 'crit';
    }
    if (total === 1) {
      critClass = 'fail';
    }
  }
  const resultHtml = `<div class="rollResult animate-in">
                        <div class="rollTotal">
                          <span class="rolledDice ${critClass}"><i class="fal fa-dice-d${value}"></i> ${amount}d${value}</span> 
                          <span class="rolledResult ${critClass}">${total}</span>
                        </div>
                        <div class="rollAll">${totalArray.join(' + ')}</div>
                      </div>`;

  elements.resultSpan.insertAdjacentHTML('afterbegin', resultHtml);
  elements[diceName].value = '';
}

export const rollTooMuch = (value, amount) => {
  const errorText = [
    `Hey Daan, ${amount} dice? Realy?`,
    `Hey Daan, what monster does <span class="rolledDice fail"><i class="fal fa-dice-d${value}"></i> ${amount}d${value}</span> damage?`,
    `Hey Daan, ${amount} dice is a bit excessive`,
    `Hey Daan, That must be dice fixing`,
    `Hey Daan, You really want your PC's to die`,
    `Hey Daan, How many? WOW`
  ]
  const randomQuote = Math.floor(Math.random() * errorText.length);

  const diceName = "d" + value.toString() + "Input";
  const resultHtml = `<div class="rollResult animate-in">
                        <div class="rollTotal">
                          <span class="rolledResult errorText fail">${errorText[randomQuote]}</span>
                        </div>
                      </div>`;
                      
  elements.resultSpan.insertAdjacentHTML('afterbegin', resultHtml);
  elements[diceName].value = '';
}

