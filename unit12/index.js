//ex1 
function isEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
//ex2
const flattenArray = (arr) => {
  let result = []
  let tempArr = [...arr]
  while(tempArr.length) {
    const tempItem = tempArr.pop()
      if(Array.isArray(tempItem)) {
        tempArr.push(...tempItem) // 
      } else {
        result.push(tempItem)
      }
  }
  return result.reverse()
}

// ex3 

const cutArr = (arr, num) => {
  let arrRevered = arr.reverse() 
  let tempArr = []
  let result = []
  if(arr.length == 0) {
      return 0
  }
  while( arrRevered.length > num ) {
    for(let i = 0; i < num; i++) {
        tempArr.push(arrRevered.pop())
    }
/* if num = 2, run push() 2 times like: 
    tempArr.push(arrRevered.pop())
    tempArr.push(arrRevered.pop())*/
      result.push(tempArr.reverse())
      tempArr = []
  }
  result.push(arrRevered)

  return result
}
