import test from 'ava'
import { selectionSort } from '../main'

const unsortedArray = [5, 2, 4, 6, 1, 3, 17, 5, 5, 3]

test.serial('empty input array', (t) => {
  let inputArray: number[] = [];

	selectionSort(inputArray)

  t.is(inputArray.length, 0)
});


test.serial('test inPlace = true', (t) => {
  const inputArray: number[] = [];
  const inputArrayRef = inputArray;
	selectionSort(inputArray, true)

  t.is(inputArray, inputArrayRef)
});

test.serial('test inPlace = false', (t) => {
  const inputArray: number[] = [];

	const sortedArray = selectionSort(inputArray, false)

  t.not(inputArray, sortedArray)
});


test.serial('input array of length 1', (t) => {
  let inputArray: number[] = [5];
	selectionSort(inputArray);

  t.is(inputArray.length, 1);
  t.is(inputArray[0], 5);
});

test.serial('sort test', (t) => {

  const inputArray: number[] = [...unsortedArray];
  const arrayLength: number = inputArray.length;

	selectionSort(inputArray);

  t.is(inputArray.length, arrayLength)
  for(let i =  1; i < inputArray.length; i++){
    t.true(inputArray[i] >= inputArray[i-1]);
  }
});