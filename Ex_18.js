// Think of at least five places in the world you’d like to visit.
// 1. Store the locations in a array. Make sure the array is not in alphabetical order.
// 2. Print your array in its original order.
// 3. Print your array in alphabetical order without modifying the actual list.
// 4. Show that your array is still in its original order by printing it.
// 5. Print your array in reverse alphabetical order without changing the order of the original list.
// 6. Show that your array is still in its original order by printing it again.
// 7. Reverse the order of your list. Print the array to show that its order has changed.
// 8. Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 10. Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var myPlaces = ["Karachi", "UK", "Larkana", "Sukhar", "Hyderabad", "Quetta"];
// console.log(myPlaces);
// making a copy of an array
var copyOfArray = myPlaces.slice();
var sortedArray = copyOfArray.sort();
// console.log(sortedArray);
// printing original array
// console.log(myPlaces);
// reversing original array
// first we have make a copy of original array
var copyOfArray2 = myPlaces.slice();
var reverseOriArray = copyOfArray2.reverse();
// console.log(reverseOriArray);
// printing original array
// console.log(myPlaces);
// reverse the order of original array
var reverseOriArray2 = myPlaces.reverse();
// console.log(reverseOriArray2);
var againReverse = reverseOriArray2.reverse();
// console.log(againReverse); // same in origninal array
// sorting original array
var sortOriArray = myPlaces.sort();
console.log(sortOriArray);
var reversesortedArray = sortOriArray.reverse();
console.log(reversesortedArray);
