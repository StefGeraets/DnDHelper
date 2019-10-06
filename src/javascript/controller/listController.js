import { elements, data } from '../views/base';
import * as listUI from '../views/listView';

export const getCharacterList = () => {
  return data.characters;
}

export const sortCharacterList = () => {
  data.characters.sort((a, b) => a._initiative - b._initiative)
  data.characters.reverse();
}

export const clearData = () => {
  data.characters = [];
  if (data.list !== '') {
    data.list.reset();
  }
  elements.characterList.innerHTML = '';
}

export const nextTurn = () => {
  if (data.characters.length) {
    const firstItem = data.characters.shift();
    data.characters.push(firstItem);
    listUI.updateCharacterList();
    data.list.nextTick();
  }
}

export const prevTurn = () => {
  if (data.characters.length) {
    const lastItem = data.characters.pop();
    data.characters.unshift(lastItem);
    listUI.updateCharacterList();
    data.list.prevTick();
  }
}