// sets my name to a variable. type = string.
var myName = "Josh";
// sets the number of states to a varible. type = number.
var numOfStates = 50;
// sets the result of 4 + 5 to a variable. type = number.
var addingDemo = 4 + 5;
// a function that alerts the user with "Hello World!". returns nothing so it can be labeled as void.
function sayHello() {
    alert("Hello World!");
}
sayHello();
// a function that checks the age passed in and alerts if the person is not old enough.
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// an array of my favorite vegetables. type = array of strings.
var myFavoriteVeggies = ["Broccoli", "Cucumber", "Spinach"];
for (var i = 0; i < myFavoriteVeggies.length; i++) {
    var element = myFavoriteVeggies[i];
    console.log(element);
}
// an array of people with their age as well. type is an array of people(using the interface).
var peopleArray = [
    {
        name: "Josh",
        age: 25
    },
    {
        name: "Garrett",
        age: 20
    },
    {
        name: "Jake",
        age: 24
    },
    {
        name: "Deva",
        age: 23
    },
    {
        name: "Brian",
        age: 14
    }
];
// looping through peopleArray and checking each ones age.
for (var i = 0; i < peopleArray.length; i++) {
    var element = peopleArray[i];
    checkAge(element.name, element.age);
}
// a function that takes a string parameter called "word" and, if that word is even, logs "The world is nice and even" to the console. If not, it logs "The world is an odd place." to the console. (this is a ternary statement. Very similiar to an if/else statement.)
function getLength(word) {
    word.length % 2 === 0 ? console.log("The world is nice and even") : console.log("The world is an odd place.");
}
getLength("Hello World!");
