import { Magician } from '../magician';

test('should be correct Magician', () => {
  const magician = new Magician('magician');
  expect(magician).toEqual({
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
