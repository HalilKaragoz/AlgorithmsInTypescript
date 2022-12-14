import test from 'ava'
import { merge } from '../main'

const unsortedArray = [5, 2, 4, 6, 1, 3, 17, 5, 5, 3]

test.serial('merge: all zeros', (t) => {
  let inputArray: number[] = [...unsortedArray];

	merge(inputArray, 0, 0, 0);

  t.deepEqual(inputArray, unsortedArray);
});

test.serial('merge: all array length', (t) => {
  let inputArray: number[] = [...unsortedArray];

	merge(inputArray, inputArray.length, inputArray.length, inputArray.length);

  t.deepEqual(inputArray, unsortedArray);
});

test.serial('merge: arrays of length 1', (t) => {
  let inputArray: number[] = [...unsortedArray];

	merge(inputArray, 0, 0, 1);

  t.deepEqual(inputArray.slice(0, 2), [2, 5]);
});

test.serial('merge: arrays of equal sizes', (t) => {
  let inputArray: number[] = [2, 4, 5, 1, 3, 6];

	merge(inputArray, 0, 2 , inputArray.length - 1);

  t.deepEqual(inputArray, [1, 2, 3, 4, 5, 6]);
});

test.serial('merge: arrays of different sizes', (t) => {
  let inputArray: number[] = [2, 4, 5, 1, 3, 5, 5, 6, 17];

	merge(inputArray, 0, 2 , inputArray.length - 1);

  t.deepEqual(inputArray, [1, 2, 3, 4, 5, 5, 5, 6, 17]);
});

test.serial('merge: left array empty', (t) => {
  let inputArray: number[] = [1, 2, 3, 4, 5, 5, 5, 6, 17];

	merge(inputArray, 0, 0, inputArray.length - 1);

  t.deepEqual(inputArray, [1, 2, 3, 4, 5, 5, 5, 6, 17]);
});

test.serial('merge: right array empty', (t) => {
  let inputArray: number[] = [1, 2, 3, 4, 5, 5, 5, 6, 17];

	merge(inputArray, 0, inputArray.length - 1, inputArray.length - 1);

  t.deepEqual(inputArray, [1, 2, 3, 4, 5, 5, 5, 6, 17]);
});