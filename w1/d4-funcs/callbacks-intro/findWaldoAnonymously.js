// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names,found) => {
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
