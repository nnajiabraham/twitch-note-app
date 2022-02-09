// let username = "Ralph";
// let age = 26;

// age /= 2


// /*
// fdfsdfsf
// fdfsdfdsf
// fdsdf
// dfsdfd
// ddfsdf
// console.log("Hello " + username)
// */


// console.log("Hello " + username)
// console.log(`Hello ${username} You are ${age} years old today`)

// const isATechBro = true;
// const isMatured = 25; // age maturity is 18

// if (isATechBro && isMatured >= 18) {
//     console.log("Tech Bro entered chat")
// } else if (isATechBro == false){
//     console.log("Tech sis entered chat")
// }else {
//     console.log("User entered chat")
// }


// let loopStart = 10;

// while(loopStart >= 1){
//     console.log(loopStart);
//     loopStart--
// }


// do {
//     console.log(loopStart);
//     loopStart--
// } while(loopStart >= 1);

// for (let i = 1; i<=10; i++){
//     console.log(`i is currently ${i}`);
// }

// let isTechBro = false
// let username = isTechBro ? "Abraham" : "Nobody"; 
// console.log(username)

// function calcAgeThisYear(){
//     console.log(`You'll be ${2022 - 1995} years old this year`);
// }

// calcAgeThisYear();


// function calcAgeForSpecificYear(yearToCalc, birthYear){
//     const age = yearToCalc - birthYear;

//     console.log(`In the year ${yearToCalc}, you'll be ${age} years old. Birth year = ${birthYear}`)
// }

// calcAgeForSpecificYear(2004, 1995);
// calcAgeForSpecificYear(2010, 1995);
// calcAgeForSpecificYear(2023, 1995);
// calcAgeForSpecificYear(2030, 1995);
// calcAgeForSpecificYear(2040, 1995);
// calcAgeForSpecificYear(2055, 1995);

// const canDrink = (birthYear) => {
//     const isEligible = 2022 - birthYear;

//     return isEligible;
// }

// const canDrink = (birthYear) => (2022 - birthYear);

// const is18Plus = canDrink(1997) >= 18 ? true : false

// console.log(`Can I drink: ${is18Plus}`)

// let age = 0;

// function calcAgeForSpecificYear(yearToCalc, birthYear){
//     age = yearToCalc - birthYear;
//     console.log(`In the year ${yearToCalc}, you'll be ${age} years old. Birth year = ${birthYear}`)
// }

// calcAgeForSpecificYear(2022, 1994)
// console.log(age);

// function passingAFunctionToMe(passedInfunc){
//     console.log(`Age is ${passedInfunc(1995)}`)
// }

// passingAFunctionToMe(canDrink)

/// Arrays

// const students = ["Ralph", "Denise", "Pogba", "Ronaldo", "Val"]

// students.push("Elizabeth")

// console.log(students[6])
// // console.log(students[6])
// // console.log(students.length)
// // console.log(students[students.length - 1])
// students[2] = "Precious"
// students[3] = undefined
// console.log(students)

/// Objects

// const car = {
//     make: "Honda",
//     model: "Accord",
//     year: "2018",
//     color: "Black"
// }

// car.color
// console.log(car.color)

// const student = {
//     firstName: "Abraham",
//     lastName: "Nnaji",
//     yearOfBirth: 1995,
//     deleteLater: "true",

//     getFullname: function (){
//         return `${this.firstName} ${this.lastName}`
//     },
//     getAge: function () {
//         return 2022 - this.yearOfBirth 
//     }
// }

// console.log(student.getFullname());
// console.log(student.getAge());

// student.firstName = "David"
// student.lastName = "Goliath"
// student.yearOfBirth = 1994

// console.log(student);
// console.log(student.getFullname());
// console.log(student.getAge());

// delete student.deleteLater

// console.log(student);

// console.log(student.gender)

// student["gender"] = "male"

// console.log(student.gender)

// const students = ["Ralph", "Denise", "Pogba", "Ronaldo", "Val"]

// for (let index = 0; index < students.length; index++) {
//     console.log(students[index]) 
// }

// function printArrayItems(item){
//     console.log(item)
// }

// students.forEach((item)=> {
//     console.log(item)
// } )
// const username = "Abraham"

// const toLowerCaseName = username.toLowerCase()
// const studentsWithoutPogba = students.filter( item => item.toLowerCase() === "pogba" ? false : true )
// const studentsWithoutPogba = students.filter( item => item.toLowerCase() !== "pogba")

// console.log(studentsWithoutPogba)






