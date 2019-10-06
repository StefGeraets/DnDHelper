import { data } from '../views/base';
import Character from '../models/character';
var uniqid = require('uniqid');

export const checkCharacter = (name, health, initiative) => {
  const character = new Character();
  var check = false;
  character.name = name;
  character.health = health;
  character.initiative = initiative;

  if (character.name && character.health && character.initiative) {
    check = true;
  }

  return check;
}

export const makeCharacter = (type, name, health, initiative) => {
  const character = new Character(uniqid.process(), type, name, parseInt(health), initiative);
  data.characters.push(character);
}

export const findCharacter = (charID) => {
  const result = data.characters.find(character => character.id === charID);
  return result;
}