// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// The code reads that if the door choice is equal to 1, the bear is putting on a hat, if any other value is put in for doorChoice, the bear is given a scarf.
// 2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing has a new variable assigned to it.
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// bearClothing would be scarf because the code does not know that there are two doors.
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// It is a conditional that says if the user inputs 1, the character offers the bear the clothing from the earlier conditional and reads out some dialogue
// If the user inputs 2, the character tells the bear that the clothing from the earlier conditional is too small and the bear cries
// If the user inputs 3, some dialogue is read out.
// If the user inputs any other number, the character stays with the bear and becomes its best friend.
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The code will pring "You stay with the bear and become it's best friend!"
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The code will print "You tell the bear the hat is too small and it starts to cry!"
// 7. What is your favorite ending?
// I would like to offer the bear a hat (how cute!) and have it show me a secret passage out. I don't think bears have internet. 
