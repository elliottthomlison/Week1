const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

function stringLengths(){
  return lighthouses.map(x => x.length)
}

// stringLengths = (data) => [...data].map(x=> x.length);

console.log(stringLengths(lighthouses))
