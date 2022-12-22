import { Zombie } from '../zombie';

test('should be correct Zombie', () => {
  const zombie = new Zombie('zombie');
  expect(zombie).toEqual({
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
