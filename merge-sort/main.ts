export const mergeSort = (inArray: number[], p?: number, r?: number, inPlace=true): void | number[] => {
  let workArray: number[] = inPlace ? inArray : [...inArray];

  if(p === undefined){
    p = 0;
  }

  if(r === undefined){
    r = workArray.length
  }

  if(p < r){
    const q = Math.floor((p + r) / 2);

    mergeSort(workArray, p, q);
    mergeSort(workArray, q + 1, r);

    merge(workArray, p, q, r);
  }

  if(inPlace){
    return;
  }

  return workArray;
}

export const merge = (inArray: number[], p: number, q: number, r: number) => {

  if(inArray.length <= 1){
    return
  }

  const left = inArray.slice(p, q + 1)
  const right = inArray.slice(q + 1, r + 1)

  let i = 0, j = 0, k = p;

  while(i < left.length && j < right.length){

    if(left[i] <= right[j]){
      inArray[k] = left[i];
      i++;
    }
    else {
      inArray[k] = right[j];
      j++;
    }

    k++;
  }

  if(i < left.length){
    inArray.splice(k, left.length - i, ...left.slice(i))
  }
  else {
    inArray.splice(k, right.length - j, ...right.slice(j))
  }
}