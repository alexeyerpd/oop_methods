import { Character } from '../character';

test('should be created correct character', () => {
  const character = new Character('name', 'Bowman', 100, 1, 1, 1);
  expect(character).toEqual({
    name: 'name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 1,
    defence: 1,
  });
});

test('should be error by name short', () => {
  try {
    new Character('n', 'Bowman', 100, 1, 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect name');
  }
});

test('should be error by name long', () => {
  try {
    new Character('namenamename', 'Bowman', 100, 1, 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect name');
  }
});

test('should be error by type', () => {
  try {
    new Character('name', 'Bowmans', 100, 1, 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect type');
  }
});

test('test positive damage', () => {
  const bowman = new Character('bowman', 'Bowman', 100, 1, 25, 25);
  bowman.damage(10);
  expect(bowman.health).toBe(92.5);
});

test('test damage with zero health', () => {
  const bowman = new Character('bowman', 'Bowman', 0, 1, 25, 25);
  bowman.damage(10);
  expect(bowman.health).toBe(0);
});

test('test levelUp method', () => {
  const bowman = new Character('bowman', 'Bowman', 80, 1, 25, 25);
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('test levelUp method - should be error', () => {
  const bowman = new Character('bowman', 'Bowman', 0, 1, 25, 25);
  try {
    bowman.levelUp();
  } catch (error) {
    expect(error.message).toBe('нельзя повысить левел умершего');
  }
});
