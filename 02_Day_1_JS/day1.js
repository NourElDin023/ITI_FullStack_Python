// one
var fName = "John";
console.log(fName);

//two
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);

//three
var city;
console.log(city);
city = "Cairo";
console.log(city);

//four
alert("Welcome to our website!");

//five
// var del = confirm("Are you sure you want to delete this item?");
// console.log(del);
console.log(confirm("Are you sure you want to delete this item?"));

//six
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var fullName = firstName + " " + lastName;
confirm("Is your full name: " + fullName + " ?");
var birthYear = prompt("What is your birth year?");
var age = 2024 - birthYear;
alert("Welcome " + fullName + " your age is: " + age + " years old");
// document.write("Welcome " + fullName + " your age is: " + age + " years old");

//seven
alert(
  "Welcome to our website! This is out first release of our calculator, You can sum two numbers"
);
var fNumber = parseInt(prompt("Enter the first number"));
var sNumber = parseInt(prompt("Enter the second number"));
var sum = fNumber + sNumber;
alert(fNumber + " + " + sNumber + " = " + sum);

//eight
var salary;
console.log(typeof salary);

//nine
var a = 5;
var b = 10;
// [a, b] = [b, a];
a = b + a;
b = a - b;
a = a - b;
console.log("a = " + a);
console.log("b = " + b);