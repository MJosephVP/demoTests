function rangeInArray(inputArray = [], startNum = 0, endNum = (inputArray.length - 1) ){

  if (inputArray.length == 0) {
    return 0
  }
  if (endNum > (inputArray.length - 1)) {
    endNum = (inputArray.length - 1);
  }
  let answerSum = 0
  for (let k =  startNum; k <= endNum; k++){
    answerSum += inputArray[k];
  }
  return answerSum


  // add whatever parameters you deem necessary - good luck!
}