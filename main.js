/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/


let hasCompass = false;
let hasSword = false;
let foundTreasure = false;

console.log("You wake up in a dark forest.There are three paths ahead of you:");
console.log("1. A path leading to the mountains");
console.log("2. A road heading to the village");
console.log("3.Acave enterance nearby");

const choice1 = readline.question("Where do you go? Type 'mountains', 'village', or 'cave': ");

//Mountain path
if (choice1 ==="mountains"){
  if (hasTorch || hasCompass) {
    console.log("You safely navigate through the dark mountains.");
    console.log("At the top, you find an abandoned hut with an old map inside.");
    hasMap = true;
  } else {
    console.log("It's too dark to proceed,You decide to turn back.");
  }
}

//Village Path
else if (choice1 === "village") {
  console.log("You enter the village, but you hear remors of bandits ahead.");
  const fightChoice = readline.question("Do you want to 'fight' or 'run'?:");
  if (fightChoice === "fight" && hasSword) {
    console.log("You fight off the bandits with your sword and are hailed as a hero!");
  } else if (fightChoice === "fight" && !hasSword) {
    console.log("You try to fight, but without a weapon, you are captured!");
  } else { 
    console.log("You avoid the bandits and sneak through the village.");
  }
}

// Cave Path
else if (choice === "cave") {
  console.log("You enter the dark cave. It is eerily silent.");
  const exploreChoice = readline.question("Do you want to explore deeper? (yes/no): ").toLowerCase();

  if (exploreChoice === "yes") {
      console.log("You find a hidden chest containing a sword and a compass!");
      hasSword = true;
      hasCompass = true;
      foundTreasure = true;
  } else {
      console.log("You decide to leave before anything bad happens.");
  }
}

// If player got lost
else {
  console.log("You get lost and wander aimlessly.");
}

// Final Summary
console.log("\nYour adventure ends here. Summary of your journey:");
console.log(`- Torch: ${hasTorch}`);
console.log(`- Map: ${hasMap}`);
console.log(`- Compass: ${hasCompass}`);
console.log(`- Sword: ${hasSword}`);
console.log(`- Found Treasure: ${foundTreasure}`);

console.log("\nThanks for playing!");
