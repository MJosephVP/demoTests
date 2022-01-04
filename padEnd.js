function padEnd(str1, numLength, padEnd = " "){
  let totalPad = ""
  if (str1.length < numLength) {
    let loopNum = numLength - str1.length;

    //accumulating padEnd into totalPad
    for (let i = 0; i < loopNum; i++){
      //looping through padEnd

      padEndLoopNum = i
      if (padEndLoopNum >= padEnd.length) {
        padEndLoopNum = padEndLoopNum % padEnd.length;
      }
      totalPad = totalPad + padEnd[padEndLoopNum]
    }
    
  }
  return str1 + totalPad
  // add whatever parameters you deem necessary - good luck!
}