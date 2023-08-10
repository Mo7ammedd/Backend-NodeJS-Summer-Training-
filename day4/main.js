//task1
var books = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

function displayReading(books) {
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookdata = "'" + book.title + "' by " + book.author + ".";
    if (book.readingStatus) {
      console.log("Already read " + bookdata);
    } else {
      console.log("You still need to read " + bookdata);
    }
  }
}

displayReading(books);





//task2



const hours = prompt("Enter the hour");

const displayClock = (hour) => {
  document.write(`<h1>${hour} Hours</h1>`);
  document.write(`<h1>${hour * 60} Minutes</h1>`);
  document.write(`<h1>${hour * 60 * 60} Seconds</h1>`);
};

displayClock(hours);
  


  //task3
  function Operations() {
    const input = prompt("Enter the number of elements in the array:");
    const length = parseInt(input);
    const arr = [];
    
    for (let i = 0; i < length; i++) {
      const element = prompt(`Enter element ${i + 1} of ${length}:`);
      arr.push(parseInt(element));
    }
    
    const smallest = Math.min(...arr);
    const largest = Math.max(...arr);
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    const average = sum / arr.length;
    const result = [length, smallest, largest, average];
    
    for (let i = 0; i < result.length; i++) {
      document.write(`<h1> ${result[i]} </h1>`);
    }
    
    return result;
  }
  
  Operations();
  

  