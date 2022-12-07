
// Include a parameter for in_place option
export const InsertionSort = (in_array:number[])=>{
  for(let i = 1; i < in_array.length; i++){
    const key = in_array[i];
    let j = i - 1;

    while(j > -1 && in_array[j] > key){
      in_array[j + 1] = in_array[j]
      j = j - 1
    }

    in_array[j + 1] = key
  }
}

const array = [5, 2, 4, 6, 1, 3]

console.log(array)

InsertionSort(array)

console.log(array)