const readline = require("readline-sync");
const name = readline.question("What is your name? ");

let welcome = "";
let answer = "";
let key = "no";
let answerHole = "";
let answerBox = "";

while (welcome !== "no" && welcome !== "yes"){
    welcome = readline.question(`Welcome to your new prison ${name}. In order for you to escape, 
    you must search the room for the key to unlock the door. Would you like to look around? `);

    if (welcome !== "no" && welcome !== "yes"){
        console.log("Please answer 'yes' or 'no'");
    }
}

function room(){
    answer = readline.question(`What would you like to inspect?
     'table', 'door', 'hole', 'box'? `);
     inspect()
}

if (welcome === "no"){ 
    console.log(`You hear a loud bang and everything goes black as you feel your body hit the floor. You have died.`);
} 
else if (welcome === "yes"){
    console.log(`You notice a table in the center of the room, a wall with a door, 
    a wall with a dark hole, and a cardboard box in the corner.`)
    room()
}
function inspect(){
if (answer === 'table'){
    key = readline.question(`You look onto the table and discover... the key? I though I told that darn intern 
    to hide it? would you like to pick it up?`);
    room()
}
else if (answer === 'door'){
    if (key === "no"){
        console.log("You jiggle the knob but the door is locked");
        room()
    }       else if (key === "yes"){
            console.log("You put the key in the lock and voila! You are free!");
    }
}
if (answer === 'hole'){
    answerHole = readline.question(`The hole is blacker than anything you've seen before. The only way to see what's behind 
    it is to put your hand in there. Do you wanna try it?`);
    if (answerHole === "yes"){
        console.log(`Cold slowly envelopes your arm as it enters the dark void. You feel around in the numbing cold 
        but you feel nothing. You try to retrieve your arm but there is a strong resistance, the void begins to pull
        on you. Stronger and stronger the force becomes, pressing your face hard against the wall as you struggle to 
        free your arm. The cold begins to overcome you, chilling throughout your whole body. The force pulling upon 
        your arm is unbarable until suddenly the wall gives way and you plunge, full body, into the void, never to be
         seen again.`);
    }
        else if (answerHole = "no"){
            room()
        }
}
if (answer === 'box'){
    answerBox = readline.question(`You open the box and find nothing but a string seemingly taped to the bottom of the box?
     pull the string?`);
        if (answerBox === "yes"){
            console.log(`The string detaches from the bottom of the box. It would appear nothing has happened.
            Suddenly, with a flash and a bang, your life has ended.`);
        }
        else if (answerBox === "no"){
         room()
     }
}
}