import Daemon from '../daemon';

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
