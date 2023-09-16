import Team from '../app';

class Character {
  constructor(name) {
    this.name = name;
  }
}

const hero = new Character('User1');
const hero1 = new Character('User2');
const hero2 = new Character('User3');
const linkHero = hero;

test('Test - дублирование персонажа', () => {
  const comand = new Team();
  comand.add(hero1);
  expect(() => {
    comand.add(hero1);
  }).toThrow(Error);
});

test('Test Ошибки', () => {
  const comand = new Team();
  expect(() => {
    comand.add(hero1);
    comand.add(hero);
  }).not.toThrow(Error);
});

test('Test Ошибки', () => {
  const comand = new Team();
  comand.add(hero);
  expect(() => {
    comand.add(linkHero);
  }).toThrow(Error);
});

test('Test addAll', () => {
  const comand = new Team();
  comand.addAll(hero, hero1);
  expect(comand.toArray()).toEqual([hero, hero1]);
});

test('Тест дублированния в массиве', () => {
  const comand = new Team();
  comand.addAll(hero, linkHero, hero1, hero2);
  expect(comand.toArray()).toEqual([hero, hero1, hero2]);
});
