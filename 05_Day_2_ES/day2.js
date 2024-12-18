//one
let set1 = new Set(["Barry", "Angel", "Rebecca"]);
set1.add("Ahmed");
set1.add("Barry"); //set doesn't accept repeated values
console.log(...set1);
for (let element of set1) {
  console.log(element);
}

//two
let students = new Map();

students.set("Barry", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Excellent" },
    { CourseName: "Jquery", Grade: "Good" },
    { CourseName: "CSS", Grade: "V.Good" },
  ],
});

students.set("Angel", {
  Grades: [
    { CourseName: "JavaScript", Grade: "V.Good" },
    { CourseName: "Jquery", Grade: "Good" },
    { CourseName: "CSS", Grade: "Excellent" },
  ],
});

for (let [studentName, studentData] of students) {
  console.log(studentName);
  studentData.Grades.forEach((course) => {
    console.log(course.CourseName, "==>", course.Grade);
  });
}

//three
let arr3 = [1, 5, 3, 4, 2, 4, 6, 8, 5];

let isOdd = arr3.filter((num) => num % 2 != 0);
console.log(isOdd);

arr3.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
});

let firstGreater = arr3.find((num) => num > 5);
console.log(firstGreater);

let doubledValues = arr3.map((num) => num * 2);
console.log(doubledValues);

//four
document.write('<button id="showAll">Show All Tips</button>');
document.write('<button id="showTip">Show Tip Every 3 Seconds</button>');
function* tipGenerator() {
  const tips = [
    "Tip 1: Always write clean code.",
    "Tip 2: Use meaningful variable names.",
    "Tip 3: Test your code frequently.",
    "Tip 4: Comment your code well.",
    "Tip 5: Keep your functions small and focused.",
    "Tip 6: Avoid hardcoding values.",
    "Tip 7: Keep learning new technologies.",
    "Tip 8: Be consistent in your coding style.",
    "Tip 9: Learn to debug efficiently.",
    "Tip 10: Don't be afraid to ask for help.",
  ];
  for (let tip of tips) {
    yield tip;
  }
}

let showAll = document.getElementById("showAll");
showAll.addEventListener("click", () => {
  let tipGen = tipGenerator();
  for (let tip of tipGen) {
    console.log(tip);
  }
});

let showTip = document.getElementById("showTip");
showTip.addEventListener("click", () => {
  let tipGen = tipGenerator();
  let intervalId = setInterval(() => {
    let { value, done } = tipGen.next();
    if (!done) {
      console.log(value);
    } else {
      clearInterval(intervalId);
    }
  }, 3000);
});

//five
(function () {
  let num1 = 5;
  let num2 = 10;
  let sum = `num 1 + num 2 = ${num1 + num2}`;
  alert(sum);
})();

//six
let str6 = "Hello";
function reverseString(str) {
  if (str == "" || str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString(str6));

//seven
function generateCourseInfo({
  courseName = "ES6",
  courseDuration = "3 days",
  courseOwner = "JavaScript",
  ...otherProp
}) {
  const allowedProp = ["courseName", "courseDuration", "courseOwner"];
  for (let prop in otherProp) {
    if (!allowedProp.includes(prop)) {
      throw Error(`Invalid property: ${prop}`);
    }
  }
  console.log(
    `Course Name: ${courseName}\nCourse Duration: ${courseDuration}\nCourse Owner: ${courseOwner}`
  );
}

generateCourseInfo({
  courseName: "JavaScript Basics",
  courseDuration: "4 days",
});

generateCourseInfo({
  courseName: "Advanced JavaScript",
  courseDuration: "5 days",
  courseOwner: "JavaScript Academy",
});

generateCourseInfo({
  courseName: "React",
  courseOwner: "React Team",
    courseCost: "$600",
});

//eight
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allStrings = fruits.every((item) => typeof item === "string");
console.log(allStrings);

let aStart = fruits.some((item) => item[0] === "a");
console.log(aStart);

let bS = fruits.filter((item) => item[0] === "b" || item[0] === "s");
console.log(bS);

bS.forEach((item) => {
  console.log(item);
});
