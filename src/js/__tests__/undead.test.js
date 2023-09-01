import Undead from '../undead';

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
