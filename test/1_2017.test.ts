import { getDayOfTheWeek } from "../src/2017/1_2017";

describe('2017 problem', () => {
  test('1-1', () => {
    const dayOfTheWeek = getDayOfTheWeek(1, 1);
    expect(dayOfTheWeek).toBe('MON');
  });

  test('1-3', () => {
    const dayOfTheWeek = getDayOfTheWeek(1, 3);
    expect(dayOfTheWeek).toBe('WED');
  });

  test('2-1', () => {
    const dayOfTheWeek = getDayOfTheWeek(2, 1);
    expect(dayOfTheWeek).toBe('THU');
  });

  test('2-28', () => {
    const dayOfTheWeek = getDayOfTheWeek(2, 28);
    expect(dayOfTheWeek).toBe('WED');
  });

  test('3-4', () => {
    const dayOfTheWeek = getDayOfTheWeek(3, 4);
    expect(dayOfTheWeek).toBe('SUN');
  });

  test('3-14', () => {
    const dayOfTheWeek = getDayOfTheWeek(3, 14);
    expect(dayOfTheWeek).toBe('WED');
  });

  test('9-2', () => {
    const dayOfTheWeek = getDayOfTheWeek(9, 2);
    expect(dayOfTheWeek).toBe('SUN');
  });

  test('12-25', () => {
    const dayOfTheWeek = getDayOfTheWeek(12, 25);
    expect(dayOfTheWeek).toBe('TUE');
  });
});