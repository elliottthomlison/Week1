const args = process.argv.slice(2)

sum = (a,b) => {
  return a + b 
}
console.log(sum(Number(args[0]), Number(args[1]))) 

//the parameters in the console.log being called are referring to a & b from the function
