export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (!this.members.has(hero)) {
      this.members.add(hero);
    } else {
      throw new Error('Персонаж уже существует в команде');
    }
  }

  addAll(...charactersList) {
    for (const obj of charactersList) {
      this.members.add(obj);
    }
  }

  toArray() {
    return [...this.members];
  }
}
