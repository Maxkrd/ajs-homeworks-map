import ErrorRepository from '../app';

const err = new ErrorRepository();

test('Проверка имени персонажа', () => {
  expect(err.translate(1)).toBe('Персонаж не найден');
});

test('Проверка количества букв в имени', () => {
  expect(err.translate(2)).toBe('Неверное количество букв в имени');
});

test('Проверка типа персонажа', () => {
  expect(err.translate(3)).toBe('Неверный тип персонажа');
});

test('Проверка Unknown error', () => {
  expect(err.translate(4)).toBe('Unknown error');
});
