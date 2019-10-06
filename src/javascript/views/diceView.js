import { elements } from './base';

export const renderDiceroll = (value, amount, total, totalArray) => {
  const diceName = "d" + value.toString() + "Input";
  const resultHtml = `<div class="rollResult animate-in">
                        <div class="rollTotal">
                          <span class="rolledDice"><i class="fal fa-dice-d${value}"></i> ${amount}d${value}</span> 
                          <span class="rolledResult">${total}</span>
                        </div>
                        <div class="rollAll">${totalArray.join(' + ')}</div>
                      </div>`;

  elements.resultSpan.insertAdjacentHTML('afterbegin', resultHtml);
  elements[diceName].value = '';
}

