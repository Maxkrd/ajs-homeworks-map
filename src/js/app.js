export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Персонаж не найден');
    this.errors.set(2, 'Неверное количество букв в имени');
    this.errors.set(3, 'Неверный тип персонажа');
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
