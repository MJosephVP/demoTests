function drop(arr1, num1){
  let sliceStart = 1

  if (num1 === undefined){
    return arr1.slice(sliceStart)
  }
  if ((num1)> arr1.length) {
    return []
  }
  
  return arr1.slice(num1)
  // add whatever parameters you deem necessary - good luck!
  
}