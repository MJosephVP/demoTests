function sameFrequency(num1, num2){
  let text1 = num1.toString();
  let text2 = num2.toString();
  let obj1 = {}
  let obj2 = {}

  // mapping num1 into obj1
  for(const k of text1){
    if (obj1[k]) {
      obj1[k]++
    } else {
      obj1[k] = 1
    }
  }

  // mapping num2 into obj2
  for(const j of text2){
   if (obj2[j]) {
     obj2[j]++
   } else {
     obj2[j] = 1
   }
  }


  // shallow comparison of the objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}