import { elements } from '../views/base';

export default class List {
  constructor(characters) {
    this.round = 1;
    this._charCount = characters.length;
    this.tick = 0;
  }

  get charCount() {
    return this._charCount;
  }

  set charCount(newLength) {
    this._charCount = newLength;
  }

  nextTick() {
    this.tick++;
    this.checkRound();
  }

  prevTick() {
    this.tick--;
    this.checkRound();
  }

  reset() {
    this.round = 1;
    this.tick = 0;
    elements.roundCounter.innerHTML = this.round;
  }

  checkRound() {
    this.round = Math.floor(this.tick / this.charCount) + 1;
    elements.roundCounter.innerHTML = this.round;
  }
}