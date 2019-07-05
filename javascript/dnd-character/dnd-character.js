//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dice = [1, 2, 3, 4, 5, 6];

const randomDice = () => {
  return dice[Math.floor(Math.random() * 6)];
};

const fourDices = () => {
  let arr = [];
  for (let i = 1; i <= 4; i += 1) {
    arr.push(randomDice());
  }
  return arr;
};

const sumMaxDices = () => {
  let arr = fourDices();
  arr.sort((a, b) => a - b);
  return arr.slice(1).reduce((acc, elem) => acc + elem, 0);
}

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((score - 10) / 2);
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }
  static rollAbility() {
    return sumMaxDices();
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution);
  }
}