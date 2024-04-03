// You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations.
// You'll have to think of someone else to invite.
// 1. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name od the guest who can't make it.
// 2. Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
// 3. Print a second set of invitation messages, one for each person who is still in your list.
var myFriends = ["Ali", "Tariq", "Madad", "Ayaz"];
console.log("due to some personal reasons Mr. ".concat(myFriends[1], " will not come on my dinner"));
myFriends[1] = "Yasir";
console.log("New list of my friends who are comming to my dinner\n");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFriends[i]));
}
