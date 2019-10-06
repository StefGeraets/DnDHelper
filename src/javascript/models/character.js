import { elements } from '../views/base';

export default class Character {
  constructor(id, type, name, health, initiative) {
    this._id = id;
    this._type = type;
    this._name = name;
    this._health = health;
    this._initiative = initiative;
    this.dead = false;
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  get type() {
    return this._type;
  }

  set type(newType) {
    this._type = newType;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName !== '') {
      this._name = newName;
    }
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    if (newHealth !== '') {
      this._health = newHealth;
    }
  }

  get initiative() {
    return this._initiative;
  }

  set initiative(newInitiative) {
    if (newInitiative !== '') {
      this._initiative = newInitiative;
    }
  }

  getInfo() {
    console.log("Info", this.name, this.initiative, this.health, this.type);
  }

  increaseHealth(amount) {
    this._health += amount;
  }

  decreaseHealth(amount) {
    this._health -= amount;
  }
}