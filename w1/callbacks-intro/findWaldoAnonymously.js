const findWaldo = function(names, callback) {

  names.forEach((name, index) => {
    if (name === "Waldo") {
    console.log(name, names);
      callback(name, index);   // execute callback
    }
  });

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(name, i) {
  console.log(`Found ${name} at index ${i}`);
});