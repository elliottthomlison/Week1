// const printItems = function(array) {
//     for (let item of array) {
//       console.log(item);
//     }
//   }
  
//   // const array = ["😎", "💩", "🤗", "😼", "😂"];
//   const array = ["😎", ["💩", "🤗"], "😼", "😂"];
//   printItems(array);

  //or

  //calls itself whenever it finds an array so that it pushes through the layers of the array
  //until it finds the value via recursion (calling itself)

  const printItems = function(array) {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        // Print out all it's items individually
        printItems(item); 
      } else {
        console.log(item);
      }
    });
  }

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);