// Practice:
// create a function to randomize the numbers 
// create a function to log the input from node 
// call the function



















random = () => {
  return Math.floor(Math.random() *6)
}

const argv = process.argv.slice(2)
// console.log(argv)
numberOfDice = (numDice) => {
  for(let i = 0; i < numDice; i++){
    console.log(random())
  }
}
numberOfDice(argv)

//or

function rollDice() {
  return Math.ceil(Math.random()*6)
}
const argv = process.argv[2]
function numberOfDice(numDice) {
  for(let i = 0; i < numDice; i++){
    console.log(rollDice())
}
}
numberOfDice(argv)
