import test from 'ava'
import { mergeSort } from '../main'

const unsortedArray = [5, 2, 4, 6, 1, 3, 17, 5, 5, 3]

test.serial('empty input array', (t) => {
  let inputArray: number[] = [];

	mergeSort(inputArray)

  t.is(inputArray.length, 0)
});


test.serial('test inPlace = true', (t) => {
  const inputArray: number[] = [];
  const inputArrayRef = inputArray;
	mergeSort(inputArray)

  t.is(inputArray, inputArrayRef)
});

test.serial('test inPlace = false', (t) => {
  const inputArray: number[] = [];

	const sortedArray = mergeSort(inputArray, 0, inputArray.length, false)

  t.not(inputArray, sortedArray)
});


test.serial('input array of length 1', (t) => {
  let inputArray: number[] = [5];

	mergeSort(inputArray)

  t.is(inputArray.length, 1)
  t.is(inputArray[0], 5)
});

test.serial('sort test: input of length 2', (t) => {

  const inputArray: number[] = [5, 2]//[...unsortedArray]
  const inputArrayLength: number = inputArray.length
	mergeSort(inputArray)

  t.is(inputArray.length, inputArrayLength)
  for(let i =  1; i < inputArray.length; i++){
    t.true(inputArray[i] >= inputArray[i-1])
  }
});

test.serial('sort test', (t) => {

  const inputArray: number[] = [...unsortedArray]
  const inputArrayLength: number = inputArray.length
	mergeSort(inputArray)
  console.log(inputArray);
  t.is(inputArray.length, inputArrayLength)
  for(let i =  1; i < inputArray.length; i++){
    t.true(inputArray[i] >= inputArray[i-1])
  }
});

// Check inPlace option and write unit tests for merge