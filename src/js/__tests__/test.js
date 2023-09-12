import Validator from '../app';

test.each([
  ['User', true],
  ['Us-er', true],
  ['Us_er', true],
  ['Use111r', true],
  ['Use4444r', false],
  ['1User', false],
  ['User1', false],
  ['_User', false],
  ['User_', false],
  ['-User', false],
  ['User-', false],
])('Проверка имени пользователя', (nickname, expected) => {
  const result = new Validator(nickname).validateUsername();
  expect(result).toBe(expected);
});
