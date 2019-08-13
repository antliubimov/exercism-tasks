// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return this._name;
  }

  static releaseNames() {
    Robot.usedNames.clear();
  }

  generateUniqName() {
    let name = '';
    while (Robot.usedNames.has(name) || name === '') {
      for (let i = 0; i < 2; i += 1) {
        let char = Math.floor(Math.random() * 26) + 65;
        name += String.fromCharCode(char);
      }
      for (let i = 0; i < 3; i += 1) {
        name += Math.floor(Math.random() * 10);
      }
    }
    return name;
  }

  reset() {
    this._name = this.generateUniqName();
    Robot.usedNames.add(this._name);
  }
}

Robot.usedNames = new Set();