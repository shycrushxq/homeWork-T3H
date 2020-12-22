// ex1
const time = new Date()
const day = time.getDay()
const month = time.getMonth()
const year = time.getUTCFullYear()
const hour = time.getHours()
const minute = time.getMinutes()
const second = time.getSeconds()
const currentTime = day + '-' + month + '-' + year + '-' + hour + '-' + minute + '-' + second

document.getElementById('showTime').onmouseover = function () {
  console.log('Hover luc:' + currentTime )
}
document.getElementById('showTime').onmouseout = function () {
  console.log( 'Out hover lúc: ' + currentTime )
}

// ex2
// ex3 

// ex 4
document.getElementById('bdclick').ondblclick = function () {
  alert('Double click')
}

// ex 5
document.getElementById('onSelect').onselect = function () {
  const values = document.getElementById('onSelect').value
  alert(values)
}

// ex6
const showItem = (item) => {
  console.log(item.target.value )
}
