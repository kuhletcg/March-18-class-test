var numbers = [2, 3, 5];
var multiplied = numbers[0];
for (var i = 0; i < numbers.length - 1; i++) {
  multiplied = multiplied * numbers[i + 1];
}
console.log(multiplied);
