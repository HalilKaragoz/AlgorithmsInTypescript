export const selectionSort = (inArray: number[], inPlace = true) => {
  let workArray: number[] = inPlace ? inArray : [...inArray];

  for(let i = 0; i < workArray.length - 1; i++){
    let smallest = i;

    for(let j = i + 1; j < workArray.length; j++){
      if(workArray[j] < workArray[smallest]){
        smallest = j;
      }
    }

    const temp = workArray[i];
    workArray[i] = workArray[smallest];
    workArray[smallest] = temp;
  }

  if(inPlace){
    return;
  }

  return workArray;

}