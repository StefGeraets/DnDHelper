export const elements = {
  characterList: document.getElementById('characterList'),
  nameInput: document.getElementById('charName'),
  healthInput: document.getElementById('charHealth'),
  initiativeInput: document.getElementById('charInitiative'),
  roundCounter: document.getElementById('roundCounter'),
  resultSpan: document.getElementById('result'),
  d4Input: document.getElementById('d4-amount'),
  d6Input: document.getElementById('d6-amount'),
  d8Input: document.getElementById('d8-amount'),
  d10Input: document.getElementById('d10-amount'),
  d12Input: document.getElementById('d12-amount'),
  d20Input: document.getElementById('d20-amount'),
  d100Input: document.getElementById('d100-amount'),
  nameInput: document.getElementById('charName'),
  healthInput: document.getElementById('charHealth'),
  initiativeInput: document.getElementById('charInitiative'),
  roundCounter: document.getElementById('roundCounter'),
  infoButton: document.querySelector('.info-button'),
  overlay: document.querySelector('.overlay'),
  app: document.getElementById('app'),
  initiativeBtn: document.querySelector('.initiativeBtn'),
  initiativeTab: document.getElementById('initiative'),
  diceBtn: document.querySelector('.diceBtn'),
  diceTab: document.getElementById('rollDice'),
  openFormBtn: document.querySelector('.openForm'),
  characterForm: document.querySelector('.form'),
  body: document.querySelector('body'),
}

export const data = {
  characters: [],
  list: ''
}