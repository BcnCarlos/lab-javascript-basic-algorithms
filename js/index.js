// Iteration 1: Names and Input
//  

console.log("I'm ready!");

var hacker1 = "Carlos";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Greggory";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let driver = hacker1.length;
let navigator = hacker2.length;

if (driver > navigator ){
    console.log(`The driver has the longest name, it has ${driver} characters. `);
}
else if (navigator > driver){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters. `);
}
else {
    console.log(`Wow, you both have equally long names, ${driver} characters!.`);
}


// Iteration 3: Loops

/* Print all the characters of the driver's name, separated by a space and in capitals  */

var upperCase = "";
for (var i=0; i<hacker1.length; i++){
upperCase += hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(upperCase);


/* Print all the characters of the navigator's name */

var newString = "";
for (var i=hacker2.length -1; i >= 0; i-- ){
newString += hacker2[i];

}
console.log(newString);

/* Lexicographic order */

function arrayOfString(str1, str2){


if (str1 < str2) {
    console.log("The driver's name goes first");
} 
else if (str2 < str1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}
}

arrayOfString(hacker1, hacker2);