//task 1
/*var arr = [11.6, 90, 43, 774.7894];

for (var i = 0; i < arr.length; i++) {
  var number = arr[i];
  var format = number.toFixed(5);
  console.log(format);
}*/

//task2
/*var arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(prompt("Enter number " + (i + 1)));
}
document.write("<h1> Adding, Multiplying, and Dividing 3 Values </h1>");
document.write("<hr>");

var sum = eval(arr.join("+"));
document.write(
  "<h1> Sum of the 3 Values " + arr.join(" + ") + " = " + sum + "</h1>"
);

var subtraction = eval(arr.join("-"));
document.write(
  "<h1> Subtraction of the 3 Values " + arr.join(" - ") + " = " + subtraction + "</h1>"
);

var multiplication = eval(arr.join("*"));
document.write(
  "<h1> Multiplication of the 3 Values " + arr.join(" * ") + " = " + multiplication + "</h1>"
);

var division = eval(arr.join("/"));
document.write(
  "<h1> Division of the 3 Values " + arr.join(" / ") + " = " + division + "</h1>"
);*/


//task3
/*var arr = [];

for (var i = 0; i < 5; i++) {
  var userInput = parseFloat(prompt("Enter a number:"));
  arr.push(userInput);
}

var descendingOrder = arr.slice().sort(function(a, b) {
  return b - a;
});

var ascendingOrder = arr.slice().sort(function(a, b) {
  return a - b;
});

console.log('Descending Order:', descendingOrder.join(', '));
console.log('Ascending Order:', ascendingOrder.join(', '));*/