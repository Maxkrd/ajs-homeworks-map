import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
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

test('Проверка персонажа Bowman', () => {
  const realBowman = new Bowman('Name');
  const expectedBowman = {
    name: 'Name',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(realBowman).toEqual(expectedBowman);
});

test('Проверка персонажа Swordsman', () => {
  const realSwordsman = new Swordsman('Name');
  const expectedSwordsman = {
    name: 'Name',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realSwordsman).toEqual(expectedSwordsman);
});

test('Проверка персонажа Magician', () => {
  const realMagician = new Magician('Name');
  const expectedMagician = {
    name: 'Name',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realMagician).toEqual(expectedMagician);
});

test('Проверка персонажа Undead', () => {
  const realUndead = new Undead('Name');
  const expectedUndead = {
    name: 'Name',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(realUndead).toEqual(expectedUndead);
});

test('Проверка персонажа Zombie', () => {
  const realZombie = new Zombie('Name');
  const expectedZombie = {
    name: 'Name',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realZombie).toEqual(expectedZombie);
});

test('Проверка персонажа Daemon', () => {
  const realDaemon = new Daemon('Name');
  const expectedDaemon = {
    name: 'Name',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realDaemon).toEqual(expectedDaemon);
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
