//task1 

// let x=prompt("enter x value")
// let y=prompt("enrer y value")
// let value=[x,y]=[y,x]
// alert(`X value after Swap is ${x} and Y value after Swap is ${y} `);


//task2
function Min_Max(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}
const input = prompt("Enter Numbers separated by Space:");
const values = input.split(" ");
for (let i = 0; i < values.length; i++) {
  values[i] = Number(values[i]);
}
// const values = [4, 8, 2, 6, 10];
const { min, max } = Min_Max(...values);

console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
