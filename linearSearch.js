function linearSearch(arr1, seekValue){
  let i = 0
  for (const e of arr1) {
    if (e === seekValue) {
      return i
    }
    i++;
  }
  return -1
  // add whatever parameters you deem necessary - good luck!
}