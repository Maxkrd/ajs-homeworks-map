import Bowman from '../bowman';

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
