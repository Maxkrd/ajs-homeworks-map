import Zombie from '../zombie';

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
