// You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two guests.
// 1. Start with your program from Exercise 16. Add a new line that prints a message saving that you can invite only two people for dinner.
// 2. Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you're sorry you can't invite them to dinner.
// 3. Print a message to each of the two people still on your list, letting them know they're still invited.
// 4. Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var myFriends = ["Ali", "Tariq", "Madad", "Ayaz", "Hussain", "Ahmed"];
console.log("Table is not available I can invite only 2 persons\n");
// remove all 4 last elements
var friend1 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend1, " you are not invited!"));
var friend2 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend2, " you are not invited!"));
var friend3 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend3, " you are not invited!"));
var friend4 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend4, " you are not invited!\n"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " you are still invited"));
}
myFriends.pop();
myFriends.pop();
console.log(myFriends);
