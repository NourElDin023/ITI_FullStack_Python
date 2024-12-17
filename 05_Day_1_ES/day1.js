// //one
// const obj1 = { fName: "Charlotte", lName: "Vasquez", age: 30 };
// for (let key in obj1) {
//   console.log(key, "-->", obj1[key]);
// }

// //two
// const arr2 = [2, 5, 8, 9, 7, 4, 3, 6];
// for (let element of arr2) {
//   console.log(element);
// }

// //three
// const arr3 = [2, 5, 8];
// //loop on value
// for (let element of arr3) {
//   console.log(element);
// }
// // loop on index
// for (let element in arr3) {
//   console.log(element, "-->", arr3[element]);
// }

// //four
// const arr4 = [5, 9, 7];
// const arr4_2 = [...arr4];
// console.log(arr4_2);

// //five
// let Std_name = "Margaret Castillo",
//   fac_name = "Alsun",
//   Uni_name = "Ain-Shams",
//   grad = 98;
// console.log(
//   `${Std_name} is a student in faculty of ${fac_name} in ${Uni_name} university And her final grad is ${grad}.`
// );

// //six
// console.log("hello".includes("e"));

// //seven
// let obj7 = null ?? "Default Value";
// console.log(obj7)

// //eight
// const obj8 = { fName: "Chare", lName: "Vasquez", age: 30, address:{city:"Cai",Street:"New Street"} };
// // console.log(obj8.location.flat)//will cause error.
// console.log(obj8?.location?.flat)

// //nine
// const obj9 = { fName: "Chare", lName: "Vasquez", age: 30 };
// let obj9_1 ={...obj9}
// obj9_1.fName="Clifford"
// console.log(obj9);
// console.log(obj9_1)

//ten
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};
let {
  title,
  translations: [{ localization_tags:[,or] }],
} = metadata;
console.log(title, or);

// //eleven
// const obj11 = { fName: "Chare", lName: "Vasquez", age: 30 };
// // console.log(Object.entries(obj11));
// for (let [key, value] of Object.entries(obj11)) {
//   console.log(key.toUpperCase());
// }

// //twelve
// const obj12 = { [Symbol()]: "Chare", lName: "Vasquez", age: 30 };
// for (let [key, value] of Object.entries(obj12)) {
//   console.log(key, ":", value);
// }
// console.log
