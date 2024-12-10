// //one
// var car = {
//   brand: "BMW",
//   model: "E3",
//   year: 2013,
//   info: function () {
//     for (const key in car) {
//       if (key == "info") continue;
//       console.log(key, ":", car[key]);
//     }
//   },
// };

// //two
// for (var key in car) {
//   console.log(key, car[key]);
// }

// //three
// var obb = { test: "one", exam: "two" };
// function swap(para) {
//   var obj = {};
//   for (var key in para) {
//     obj[para[key]] = key;
//   }
//   return obj;
// }
// console.log(swap(obb));

// //four
// var obj1 = { fname: "ah", age: 50 };
// var obj2 = { lname: "kh", age: 20 };
// var obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// for (var key1 in obj1) {
//   for (var key2 in obj2) {
//     if (key1 == key2) {
//         obj3[`${key2}_1`]= obj1[key1];
//     }
//   }
// }
// console.log(obj3)

// //five
// var person = {
//   name: "ah",
//   age: 20,
//   address: { city: "cairo", street: "newStreet" },
//   job: { title: "dev", title: "Manager" },
//   info: function () {
//     for (const key in person) {
//       if (key == "info") continue;
//       console.log(key, ":", person[key]);
//     }
//   },
// };

// //six
// var people = [
//   { name: "c", age: 50 },
//   { name: "a", age: 20 },
//   { name: "b", age: 40 },
//   { name: "c", age: 30 },
// ];
// people.sort(function (a, b) {
//   return a.age - b.age;
// });
// console.log(people);

// //seven
// var maxmin= [1,3,4,5,6,75,66,33];
// console.log("max number is ",Math.max(...maxmin))
// console.log("min number is ",Math.min(...maxmin))

// //eight
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var newarr = [];
// arr.forEach((element) => {
//   newarr.splice(0, 0, element);
// });
// console.log(newarr);

// //nine
// var fNum = parseInt(prompt("Enter you first number"));
// var sNum = parseInt(prompt("Enter you second number"));
// var op = prompt("what do you want to do? sum - subtract - multi - divide");
// if (op == "sum") {
//   console.log(fNum + sNum);
// } else if (op == "subtract") {
//   console.log(fNum - sNum);
// } else if (op == "multi") {
//   console.log(fNum * sNum);
// } else if (op == "divide") {
//   console.log(fNum / sNum);
// } else {
//   console.log("Error");
// }

// //ten
// var username = prompt("Enter you username");
// var user = "admin",
//   pass = "421$$";
// var password = prompt("Enter you password");
// if (username == user && password == pass) {
//   console.log("Welcome login success");
// } else if (username == user && password != pass) {
//   console.log("Password is incorrect");
// } else if (username != user && password == pass) {
//   console.log("Username is incorrect");
// } else if (username != user && password != pass) {
//   console.log("Username and Password are incorrect");
// }

// //eleven
// function game() {
//   var correctNum = (Math.random() * 10).toFixed();
//   console.log(correctNum);
//   var userNum = prompt("enter namenumber between 0 and 9");
//   while (correctNum != userNum) {
//     userNum = prompt("Wrong, Try again");
//   }
//   if (correctNum == userNum) alert("You guessed the correct number");
// }

// //twelve
// var test = [
//   { name: "chair", price: 20 },
//   { name: "table", price: 10 },
// ];
// function promotion(obj) {
//   var newArray = obj;
//   obj.forEach((element) => {
//     newArray.forEach((element2) => {
//       element2.discountedPrice = element2.price - 5;
//     });
//   });
//   return newArray;
// }
// console.log(promotion(test));

// //thirteen
// var userDate = prompt(
//   "Enter you birthdate in the following format (DD-MM-YYYY)"
// );
// function valid(input) {
//   var checker = userDate.split("-");
//   if (
//     input.length == 10 &&
//     input[2] == "-" &&
//     input[5] == "-" &&
//     checker[0] >= 1 &&
//     checker[0] <= 31 &&
//     checker[1] >= 1 &&
//     checker[1] <= 12 &&
//     checker[2] >= 1 &&
//     checker[2] <= 2024
//   ) {
//     var newDate = { y: checker[2], m: checker[1] - 1, d: checker[0] };
//     alert(userDate);
//   } else {
//     alert("Wrong date format");
//   }
// }
// valid(userDate);

//fourteen
function getDayName(dateString) {
  // Create a new Date object from the date string
  const date = new Date(dateString);

  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day index (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = date.getDay();

  // Return the day name
  return daysOfWeek[dayIndex];
}

// Example usage:
console.log(getDayName("2024-12-10")); // Output: "Tuesday"

//fifteen
