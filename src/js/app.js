export class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Неправильный ввод имени");
    }
    const typeString = ["Magician", "Daemon"];

    if (!typeString.includes(type)) {
      throw new Error("Неправильный ввод типа");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._attack = 100;
    this.durman = false;
  }
}

export class MathOperation extends Character {
  constructor(name, type, _attack) {
    super(name, type, _attack);
  }

  set attack(distance) {
    this.distance = distance;
  }

  get attack() {
    if (this.durman) {
      this._attack = ((100 - 10 * (this.distance - 1)) - Math.log2(this.distance) * 5).toFixed(2);
    } else {
      this._attack = 100 - 10 * (this.distance - 1);
    }
    return this._attack;
  }

  set stoned(durman) {
    this.durman = durman;
  }

  get stoned() {
    return this.durman;
  }
}

export class Magician extends MathOperation {
  constructor(name, type, attack) {
    super(name, type, attack);
    this.defence = 40;
  }
}

export class Daemon extends MathOperation {
  constructor(name, type, attack) {
    super(name, type, attack);
    this.defence = 40;
  }
}
