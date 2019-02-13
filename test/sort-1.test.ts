import { sort } from "../src/sort-1/sort-1";

describe('sort-1', () => {
  test('2개 숫자 정렬', () => {
    const sorted = sort([2 ,1]);
    expect(sorted).toEqual([1,2]);
  })

  test('3개 숫자 정렬', () => {
    const sorted = sort([2, 3, -1]);
    expect(sorted).toEqual([-1,2, 3]);
  })

  test('5개 숫자 정렬', () => {
    const sorted = sort([5, 4, 3, 2, 1]);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  })

  test('4개 숫자 정렬2', () => {
    const sorted = sort([172, -59, 999, 8]);
    expect(sorted).toEqual([-59, 8, 172, 999]);
  })

  test('5개 숫자 정렬2', () => {
    const sorted = sort([5, 1, -2, 3, -4, 1000]);
    expect(sorted).toEqual([-4, -2, 1, 3, 5, 1000]);
  })

  test('5개 숫자 정렬3', () => {
    const sorted = sort([32, 1, 4, 5, -323]);
    expect(sorted).toEqual([-323, 1, 4, 5, 32]);
  })

  test('5개 숫자 정렬3', () => {
    const sorted = sort([5, 1, 6, 7, 2]);
    expect(sorted).toEqual([1, 2, 5, 6, 7]);
  })

  test('10개 숫자 정렬', () => {
    const sorted = sort([5, 4, 3, 2, 8, 6, 9, 10, 15, 1]);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 15]);
  })

  test('복잡 정렬', () => {
    const sorted = sort([1000, 1, 5, 20, 90000]);
    expect(sorted).toEqual([1, 5, 20, 1000, 90000]);
  })

  test('음수', () => {
    const sorted = sort([-10, -100, -5, -1000, 0]);
    expect(sorted).toEqual([-1000, -100, -10, -5, 0]);
  })
});