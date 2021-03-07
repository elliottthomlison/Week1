// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      let index = i
      found(index);   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found at index ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// The second argument/parameter is expected to be a (callback) function

// const findWaldo = function(names, found) {
//   names.forEach(function(name){
//     if(name === "Waldo"){
//       actionWhenFound += name.indexOf(name)
//       found(); 
//     }

// const actionWhenFound = function(index) {
//   console.log(`Found at index ${index}`);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
//   console.log("Waldo is located at:", index);
// });