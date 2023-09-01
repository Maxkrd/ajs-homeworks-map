import Magician from '../magician';

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
