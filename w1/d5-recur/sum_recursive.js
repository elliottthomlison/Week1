//loop style
// function sumToOne(n) {
//     let sum = 0;
//     for (let i = n; i >= 1; i--) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log(sumToOne(2));

//recursive style
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));