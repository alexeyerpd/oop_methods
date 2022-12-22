import { Swordsman } from '../swordsman';

test('should be correct Swordsman', () => {
  const swordsman = new Swordsman('swordsman');
  expect(swordsman).toEqual({
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
