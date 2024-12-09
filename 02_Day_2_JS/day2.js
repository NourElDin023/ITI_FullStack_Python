//one
var nOne = prompt("Please Enter a number");
if (nOne % 2 == 0) {
  console.log(`${nOne} is even`);
} else {
  console.log(`${nOne} is odd`);
}

//two
var isprocced = confirm("Do you want to proceed?");
isprocced == true ? alert("You chose to proceed") : alert("Action canceled");

//three
var num = 10;
num % 2 === 0 ? console.log("hi") : console.log("Heloo");

//four
do {
  age = Math.abs(prompt("Please Enter a your age"));
  if (age >= 1 && age <= 10) {
    console.log("You are a child");
  } else if (age >= 11 && age <= 18) {
    console.log("You are a teenager");
  } else if (age >= 19 && age <= 50) {
    console.log("You are a grown up");
  } else {
    console.log("You are old");
  }
} while (age != 0);

//five
var str = prompt("Please Enter a your text");
var a = 0,
  e = 0,
  o = 0,
  u = 0,
  ii = 0;
for (var i = 0; i < str.length; i++) {
  if (str[i] == "a") {
    a++;
  } else if (str[i] == "e") {
    e++;
  } else if (str[i] == "o") {
    o++;
  } else if (str[i] == "u") {
    u++;
  } else if (str[i] == "i") {
    ii++;
  }
}
console.log(`a: ${a}, e: ${e}, o: ${o}, u: ${u}, i: ${ii}`);

//six
var hours = Math.abs(prompt("Enter time in 24-hours format"));
var diff = hours - 12;
if (diff == -12 || hours == 24) {
  console.log("time is 12AM");
} else if (diff == 0) {
  console.log("time is 12PM");
} else if (diff > 0) {
  console.log(`time is ${diff}PM`);
} else {
  console.log(`time is ${hours}AM`);
}

//seven
var str1 = prompt("Please Enter a your text");
var capitalized = str1.charAt(0).toUpperCase() + str1.slice(1);
console.log(capitalized);

//eight
do {
  var color = prompt("Enter you favorite color");
  var correctColor = confirm(`You choose ${color}. Is that correct?`);
  correctColor == true ? alert("Great choice!") : alert("lets try again");
} while (correctColor == false);

//nine
var savedPassword = "Welcome";
do {
  var password = prompt("Please enter your correct password");
} while (password != savedPassword);

//ten
var date1 = new Date("2024 12 10");
var date2 = new Date("2024 12 8");
if (date1 > date2) {
  console.log(`${date1} is older than ${date2}`);
} else if (date2 > date1) {
  console.log(`${date2} is older than ${date1}`);
} else {
  console.log("Both dates are the same");
}

//eleven
var date1 = new Date("2024 11 10");
var date2 = new Date("2024 12 8");
var datediff = Math.abs(date1 - date2);
console.log(Math.round(datediff / 1000 / 60 / 60 / 24));

//twelve
var sum = 0;
for (var i = 0; i <= 100; i += 2) {
  sum = sum + i;
}
console.log(sum);

//thirteen
var text2 = "Hello World!";
console.log(text2.slice(6, text2.length - 1));

//Fourteen
var num4 = 5.678;
console.log(num4.toFixed(2));

//fifteen
var num5 = 15;
if (num5 % 5 == 0 && num5 % 3 == 0) {
  console.log("True");
} else {
  console.log("False");
}
