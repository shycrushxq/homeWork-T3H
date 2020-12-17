
var name = "    nguyen van a"


const getName = name  => {
  name = name.trim()
  while(name.indexOf(' ') !== -1) {
      name = name.replace('  ', ' ')
  }
  return name

} 
