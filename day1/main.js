//                               day1 
//task1
var message = prompt("Enter your message");

for (var i = 1; i <= 6; i++) {
  var heading = ("h" + i);
  document.write("<" + heading + ">" + message + "</" + heading + ">");
}

//-------------------------------------
//task2
var sum=0;
var input;
while(input!=0){
    input=parseInt(prompt("enter a value"));
    sum+=input;

}
console.log("the sum is " + sum);

//--------------------------------------
//task3

function evaluateExpression(expression) {
    return eval(expression);
  }
  
  var userInput = prompt("Enter a mathematical expression:");
  
  var result = evaluateExpression(userInput);
  
  alert("You entered: " + userInput + ", and the result is: " + result);

 //--------------------------------------
 //task4

let Name = "";
 let birthYear = "";
 let age = "";

 while (typeof Name !== "string" || Name.trim().length === 0) {
  Name = prompt("Enter your name:");
 }
 while (isNaN(birthYear) || birthYear < 1000 || birthYear >= 2010){
   birthYear = parseInt(prompt("Enter your birth year:"));
 }
 age = 2023 - birthYear;

 document.write("Name: " + Name + "<br>");
 document.write("Birth year: " + birthYear + "<br>");
 document.write("Age: " + age + "<br>");

