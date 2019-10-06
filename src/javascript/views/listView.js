import { elements, data } from './base';

export const updateCharacterList = () => {
  var html = '';
  data.characters.forEach(char => {
    var templ = template(char.id, char.type, char.name, char.health, char.initiative, char.dead);
    html += templ;
  });
  elements.characterList.innerHTML = html;
}

function template(id, type, name, health, initiative, dead) {
  return `<div class="character ${type} anIn ${dead ? 'death' : ''}" data-id="${id}" id="${id}">
            <div class="stats">
              <div class="rolledInitiative">
                <i class="fal fa-dice-d20"></i>
                <span>${initiative}</span>
              </div>
            </div>
            <div class="info">
              <div class="name">${name}</div>
              <div class="health hp"><i class="fal fa-heart hp"></i><span class="healthPoints hp">${health}</span></div>
            </div>
            <div class="boxActions">
              <button class="btnHealth decHealth" onclick=decHealth("${id}")><i class="fal fa-minus"></i></button>
              <input type="number" id="adjustHealth">
              <button class="btnHealth incHealth" onclick=incHealth("${id}")><i class="fal fa-plus"></i></button>
            </div>
          </div>`
}