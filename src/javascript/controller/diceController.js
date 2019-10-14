import { elements } from '../views/base';

export const submitDice = (diceValue) => {
  const diceName = "d" + diceValue.toString() + "Input";
  const amount = elements[diceName].value;
  var totalArray = [];
  var total = 0;
  var tooMuch = false;

  if (amount === '' || amount <= 1) {
    var diceRoll = rollDice(diceValue);
    total = diceRoll
  } else if (amount > 999) {
    tooMuch = true;
  } else {
    for (let i = 0; i < amount; i++) {
      let diceRoll = rollDice(diceValue);
      totalArray.push(diceRoll);
      total = total + diceRoll;
    }
  }

  return {
    tooMuch: tooMuch,
    diceValue: diceValue,
    amount: amount,
    total: total,
    totalArray: totalArray
  };
}

const rollDice = (amount) => {
  return Math.floor(Math.random() * amount) + 1
}
