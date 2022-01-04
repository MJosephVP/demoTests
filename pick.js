function pick(obj1, arr1){
  let newObj = {};
  for (let e in arr1){
    if (obj1[e]){
      newObj[e] = obj1[e]
    }
  }
  
  return newObj

  // add whatever parameters you deem necessary - good luck!
}