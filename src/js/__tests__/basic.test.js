import { Magician, Daemon } from '../app';

test ('testing error name', () => {
  expect(() => new Magician('R', 'Magician')).toThrow('Неправильный ввод имени')
})

test ('testing error type', () => {
  expect(() => new Magician('Rows', 'Magic')).toThrow('Неправильный ввод типа')
})

test ('testing attack Magician', () => {
  const magician = new Magician('Daef', 'Magician');
  magician.attack = 5;
  expect(magician.attack).toBe(60)
})

test ('testing attack Daemon', () => {
  const daemon = new Daemon('Lucifer', 'Daemon');
  daemon.attack = 3;
  expect(daemon.attack).toBe(80);
})

test ('testing durman attack Magician', () => {
  const magician = new Magician('Daef', 'Magician');
  magician.stoned = 2;
  expect(magician.stoned).toBe("85.00");
})

test ('testing durman attack Daemon', () => {
  const magician = new Magician('Lucifer', 'Daemon');
  magician.stoned = 3;
  expect(magician.stoned).toBe("72.08");
})

