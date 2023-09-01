import Swordsman from '../swordsman';

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
