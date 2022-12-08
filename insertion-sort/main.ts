export const insertionSort = (inArray:number[], inPlace=true): void | number[] => {

  let resultArray: number[] = inPlace ? inArray : [...inArray];

  for(let i = 1; i < resultArray.length; i++){
    const key = resultArray[i];
    let j = i - 1;

    while(j > -1 && resultArray[j] > key){
      resultArray[j + 1] = resultArray[j];
      j = j - 1;
    }

    resultArray[j + 1] = key;
  }

  return resultArray;
}
