import { elements } from '../views/base';

export const submitDice = (diceValue) => {
  const diceName = "d" + diceValue.toString() + "Input";
  const amount = elements[diceName].value;
  var totalArray = [];
  var total = 0;

  if (amount === '' || amount <= 1) {
    var diceRoll = rollDice(diceValue);
    total = diceRoll
  } else {
    for (let i = 0; i < amount; i++) {
      let diceRoll = rollDice(diceValue);
      totalArray.push(diceRoll);
      total = total + diceRoll;
    }
  }

  return {
    diceValue: diceValue,
    amount: amount,
    total: total,
    totalArray: totalArray
  };
}

const rollDice = (amount) => {
  return Math.floor(Math.random() * amount) + 1
}
