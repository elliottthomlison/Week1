const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passing = grades.filter(function(grades) {
  return (grades > 70);
});
console.log("These are the passing grades:", passing);
