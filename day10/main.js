//>>>>>>>>>>>>>>task 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const fruits=["apple","strabwerry","banana","orange","mango"];

const allStrings = fruits.every(element => typeof element === 'string');
console.log(allStrings); 


const startsWithA = fruits.some(element => element.startsWith('a'));
console.log(startsWithA);

const filtering=fruits.filter(element => element.startsWith("b")  || element.startsWith("s"));
console.log(filtering);


const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log(likedFruits);


fruits.forEach(element => {
  console.log(element);
});



//>>>>>>>>>>>>>>>>>>>>>>>>>task 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function* fibonacciSeriesElements(count) {
    let previous = 0;
    let current = 1;
  
    for (let i = 0; i < count; i++) {
      yield current;
      const next = previous + current;
      previous = current;
      current = next;
    }
  }
  
  // Usage
  const count = 10; // Number of elements to display
  const fibonacciElementsGenerator = fibonacciSeriesElements(count);
  
  for (let element of fibonacciElementsGenerator) {
    console.log(element);
  }
  
  
//>>>>>>>>>>>>>>>>>>>>>>>>>task 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const myObject = {
    property1: 'value1',
    property2: 'value2',
    property3: 'value3',
    
    [Symbol.iterator]() {
      const properties = Object.keys(this);
      let index = 0;
  
      return {
        next: () => {
          if (index < properties.length) {
            const currentProperty = properties[index];
            index++;
            return { value: this[currentProperty], done: false };
          }
  
          return { done: true };
        }
      };
    }
  };
  
  for (const property of myObject) {
    console.log(property);
  }
  