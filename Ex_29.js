// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// 1. Make a array of your three favorite fruits and call it favorite_fruits.
// 2. Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favoriteFruits = ["Apple", "Banana", "Orange",];
// if(favoriteFruits.includes("Mango")){
//    console.log(`I would like to eat Mango`);
// }else if(favoriteFruits.includes("Apple")){
//    console.log(`I would like to eat Apple`);
// }else{
//    console.log(`fruits are not available!`);
// }
var fruitAvailable = "Orange";
if (favoriteFruits.includes(fruitAvailable)) {
    console.log("I would like to eat ".concat(fruitAvailable));
}
else {
    console.log("fruits are not available!");
}
