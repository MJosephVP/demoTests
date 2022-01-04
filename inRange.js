function inRange(lookupNum, startNum, endNum){
  if (typeof endNum == 'undefined') {
    endNum = startNum;
    startNum = 0;
  }

  if (startNum > endNum) {
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }

  for(let i = startNum; i < endNum; i++){
    if (i <= lookupNum && i+1 > lookupNum) {
      return true
    } 
  }
  return false
  
}