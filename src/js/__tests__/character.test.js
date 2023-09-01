import Character from '../character';
import Daemon from '../daemon';

test('Тест короткого имени', () => {
  function result() {
    return new Character('b', 'Bowman');
  }
  expect(result).toThrow('Неверное количество букв в имени!');
});

test('Тест длинного имени', () => {
  function result() {
    return new Character('asdfghjklmnbvcxz', 'Bowman');
  }
  expect(result).toThrow('Неверное количество букв в имени!');
});

test('Тест неверного типа', () => {
  function result() {
    return new Character('name', '1');
  }
  expect(result).toThrow('Тип героя должен быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('Проверка удачного повышения уровня персонажа', () => {
  const realDaemon = new Daemon('Name', 'Daemon');
  realDaemon.levelUp();
  const expectedDaemon = {
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  expect(realDaemon).toEqual(expectedDaemon);
});

test('Проверка неудачного повышения уровня персонажа', () => {
  const realDaemon = new Daemon('Name', 'Daemon');
  realDaemon.health = 0;
  expect(() => realDaemon.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('Проверка удачного нанесения урона персонажу', () => {
  const realDaemon = new Daemon('Name', 'Daemon');
  realDaemon.damage(20);
  const expectedDaemon = {
    name: 'Name',
    type: 'Daemon',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(realDaemon).toEqual(expectedDaemon);
});

test('Проверка неудачного нанесения урона персонажу', () => {
  const realDaemon = new Daemon('Name', 'Daemon');
  realDaemon.health = 0;
  expect(() => realDaemon.damage(20)).toThrow('Нельзя нанести урон умершему');
});
