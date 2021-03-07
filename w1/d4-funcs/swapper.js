const swapper = function(key1, object1, key2, object2) {

  console.log('Swap!');
  
  const obj2Original = object2[key2]; //saving the value of 5
  
  object2[key2] = object1[key1] //c: 5 changing to 1 
  object1[key1] = obj2Original; //a: 1 changing to 5
  
  console.log('object1', object1); 
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });

// 

const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
    const object1k2 = object2[key2]
    const object2k1 = object1[key1]

    object1[key1] = object1k2
    object2[key2] = object2k1
  
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });
