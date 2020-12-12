const getMultiplicationTable = (num) => {
  let i
  for(i = 1; i <= 9 ; i++ ) {
    console.log(num + '*' + i +'='+ num*i )
  }
}

const getEvenNumber = (num) => {
  if( !Number.isInteger(num) || num > 30 || num < 1 ){
    console.log('Number is not corect, please choose a 1 < integer number < 30' )
  } else {
    let i
    for(i = 2; i <= num ; i++ ){
      console.log(i)
      i += 1
    }
  }
}
const getSumNumber = (num) => {
  if(!Number.isInteger(num) || num > 30 || num < 1 ) {
    console.log('Number is not corect, please choose a 1 < integer number < 30')
  } else {
    let i,sum = 0
    for( i = 1; i <= num; i++ ) {
      sum += i
    }
    return sum
  }
}

const getFactorialNumber = (num) => {
  if( !Number.isInteger(num) || num > 30 || num < 1) {
    console.log('Number is not corect, please choose other 1 < integer number < 30')
  } else {
    let i, factoria = 1
    for( i = 1; i <= num ; i++ ) {
      factoria = i * factoria
    }
    return factoria
  }
}

const countEvenNumber = (arr) => {
  let i, result = 0
  for ( i = 0; i < arr.length ; i++ ) {
    if( arr[i] %2 == 0) {
      result += 1
    }
  }
  return result

}

const moveDuplicateItem = (arr) => {
  console.log([...new Set(arr)])
}

const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]

const concatArray = (arrName, arrScore) => {
  let result = []
  let temp = { id:'', name: '', score: ''}
  console.log(temp)
  for(let i = 0; i < arrName.length; i++ ) {
    temp.id = arrName[i].id
    temp.name = arrName[i].name
    temp.score = arrScore[i].score
    result.push(temp)
    console.log(temp)
  }
}

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const getBestAndBadStudent = (arrStudent) => {
  arrStudent.sort(function(a,b){
    return a.score - b.score
  })
  //console.log(arrStudent)
  let temp = []
  temp.push(arrStudent.pop())
  temp.push(arrStudent.shift())
  console.log(temp)
  
}
