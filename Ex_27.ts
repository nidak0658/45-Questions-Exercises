// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// 1. If the alien is green, print a message that the player earned 5 points.
// 2. If the alien is yellow, print a message that the player earned 10 points.
// 3. If the alien is red, print a message that the player earned 15 points.
// 4. Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let aleinColor = "red";
// let aleinColor = "green";
// let aleinColor = "yellow";
let aleinColor = "no color";
if(aleinColor == "green"){
    console.log(`the player earned 5 points`);
}else if(aleinColor == "yellow"){
    console.log(`the player earned 10 points`);
}else if(aleinColor == "red"){
    console.log(`the player earned 15 points`);
}else{
    console.log(`the player earned 0 point`);
}