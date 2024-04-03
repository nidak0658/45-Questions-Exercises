// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// 1. Make a list of five or more usernames called current_users.
// 2. Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// 3. Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// 4. Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Ali", "madaD", "Ayaz", "Fayaz", "Hussain", "Tariq", "Yasir"];
var new_users = ["Ahmed", "Manzoor", "Madad", "Hadad", "ayaz"];
// we will use forEach method
new_users.forEach(function (new_user) {
    var new_userLower = new_user.toLowerCase();
    // We will use some() method
    var userNameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_userLower; }); // true or false
    // now we will apply conditions
    if (userNameTaken) {
        console.log("".concat(new_user, " needs to choose a new username because it's already taken\n"));
    }
    else {
        console.log("".concat(new_user, " is the new member added"));
        current_users.push(new_user); // add new user to current users array;
    }
});
console.log(current_users);
