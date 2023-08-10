/*Task 1 */
var show = window.location.search;
var showw = show.substring(1);
// console.log(show);
const myArray = showw.split("&");
// console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
  document.write("<h1>" + myArray[i] + "</h1>");
}

//task2
var childWindow = false;

function moveWindow() {
  if (childWindow && !childWindow.closed) {
    var screenHeight = 1000;
    var screenWidth = 1000;

    var xPositon = Math.floor(Math.random() * 1000);
    var yPositon = Math.floor(Math.random() * 1000);

    if (yPositon < screenHeight - 200) {
      yPositon += 10;
      xPositon += 10;
    } else {
      yPositon = 0;
      xPositon = Math.floor(Math.random() * (screenWidth - 200));
    }

    childWindow.moveTo(xPositon, yPositon);

    setTimeout(moveWindow, 50);
  }
}
//open window
function openChildWindow() {
  childWindow = window.open(
    "child.html",
    "childWindow",
    "width=200,height=200"
  );
  moveWindow();
}

//close window
function stopChildWindow() {
  if (childWindow && !childWindow.closed) {
    childWindow.close();
  }
}


/*Task 3 */
var tips = [
    "'var',used to declare variables",
    "it's good practise to use camelNotation in js",
    "Use camelCase for variable and function names",
    "U can Use semicolons or not to end of statements",
    "strict equality is ('===') but loose equality is ('==')",
    "Use '===' instead of '!==' when checking for inequality",
    "Use 'switch' instead of long 'if-else' chains",
    "Use comments to explain your code",
    "Always test your code thoroughly before deploying",
    "Always use stric mode so you can see your error",
  ];
  
  function getRandomTip() {
    var random = Math.trunc(Math.random() * tips.length) + 1;
    return tips[random];
  }
  
  function randFun() {
    var randomTip = getRandomTip();
    alert(randomTip);
  }

  /*Task 4 */

// var array = ["Hello", "World", "!"];
var x = "Ali Mohamed Ali";
var joinCall = Array.prototype.join.call(x, "*");
console.log(joinCall);

var joinApply = Array.prototype.join.apply(x, ["*"]);
console.log(joinApply);

var joinbind = Array.prototype.join.bind(x, "*");
var joinBind = joinbind();
console.log(joinBind);