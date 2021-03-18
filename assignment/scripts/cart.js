console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//#1 global variable basket
let basket = [];

//#2 function addItem
function addItem(item) {
  basket.push(item);
  return true;
}
console.log(basket);
