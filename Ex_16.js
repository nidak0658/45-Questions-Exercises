// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// 1. Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// 2. Add one new guest to the beginning of your array.
// 3. Add one new guest to the middle of your array.
// 4. Use append0 to add one new guest to the end of your list.
// 5. Print a new set of invitation messages, one for each person in your list.
var myFriends = ["Ali", "Tariq", "Madad", "Ayaz"];
console.log(myFriends);
console.log("we have 3 more friends to invite on dinner\n");
// adding three more friends
// add at beginning
myFriends.unshift("Yasir");
// ["Yasir", "Ali", "Tariq", "Madad", "Ayaz"];
console.log(myFriends);
// add at middle
myFriends.splice(2, 0, "Muhammad Ali");
console.log(myFriends);
// add at last
myFriends.push("Hammad");
console.log(myFriends);
// print all friends alongwith message
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " you are invited to my dinner"));
}
