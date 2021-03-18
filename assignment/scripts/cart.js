console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//#1 global variable basket
let basket = [];

//#2 function addItem and adding it to the global variable
function addItem(item) {
  basket.push(item);
  return true;
}
//Need double check if you need to have a return false;
//checking if the function is working as intended
console.log(`Basket is ${basket}`);
console.log('Adding apples', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
console.log('Adding oranges', addItem('oranges'));
console.log(`Basket is now ${basket}`);
//Is this actually adding it to the global variable basket? Go back and check this

//#3 List Items function with a loop
function listItems() {
  for (let item of basket) {
  }
}
