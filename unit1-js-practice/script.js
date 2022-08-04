
document.write("Javascript works!");
console.log("Hello console!");
console.warn("This is only a test!");

//variable declaration
let myName = "Michael";
let workFromHome = false;
let side = "15";
let radius = "10";
let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;


//log statements
console.log("My name is: " + myName + "."); //logs "myName"
console.log("I work from home: " + workFromHome + "."); //logs workFromHome status
console.log("The length of each side of the square is: " + side + "."); //logs side variable
console.log("The radius of the circle is: " + radius + "."); //logs radius variable
console.log("The area of the square is: " + squareArea + ", and the perimeter is: " + squarePerimeter + "."); //logs area and perimeter of square.
console.log("The area of the circle is: " + circleArea + ", and the perimeter is: " + circlePerimeter + "."); //logs area and perimeter of circle.


let travelOptions = ["foot", "bike", "car", "airplane"];
console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

let travelType = prompt("What travel option would you like to choose?")
console.log(`Travel Type: ${travelType}`);

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph. ");
    cost = 0;
    time = distance / 3;
} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        cost = 45;
    } else {
        console.log("Biking is free! Speed is 10mph. ");
        cost = 0;
    }
    time = distance / 10;
} else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph. ");
    cost = 0.25 * distance;
    time = distance / 60;
} else if (travelType === "airplane") {
    console.log("Flying is $0.10/mi. per passenger. Speed is 400mph. ");
    let passengers = parseInt(prompt("How many passengers?"));
    cost = 0.10 * distance * passengers;
    time = distance / 400;
} else {
    console.log(`Sorry. ${travelType} is an invalid option`);
}
console.log(`Traveling ${distance} miles by ${travelType} took ${time}
hours and cost $${cost}!`);

let costBar = "Cost: ";
//if this loop repeats 5 times...
for (let i = 0; i < cost; i++) {
    costBar += "$";
}
console.log(costBar); // "Cost: $$$$$"

let timeBar = "Travel time: ";
for (let n = 0; n < time; n++) {
    timeBar += "/";
}
console.log(timeBar);
