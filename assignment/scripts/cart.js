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
//Adding two different things into the basket to test if another object
//getting added to the global variable will work.

//#3 List Items function with a loop. (Looping over items in the basket (apples and oranges))
function listItems() {
  for (let i of basket) {
   //Had a console.log inside the function but it didn't seem to affect anything so I removed it
   //console.log(basket); is what I had inside before.
  }
}
console.log(`Basket is ${basket}`);

//#4 Creating a function that is called empty to empty the global variable basket of apple and orange
function empty() {
  basket = [];
}
console.log(empty());

//not sure if this is correctly done. Not sure if you have to use console.log(empty());
