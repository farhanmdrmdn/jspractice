// var dayNumber = 4;

// function day(dayNumber){ 
//   //using switch
// switch (dayNumber) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
//   default:
//     day = "Undefined";
// }
// console.log(day);
// }

_________________________________________________________________________________________________________________________________________________________

// switch (dayNumber) {
//   case 0:
//     dayNumber = "Sunday";
//     break;
//   case 1:
//     dayNumber = "Monday";
//     break;
//   case 2:
//      dayNumber = "Tuesday";
//     break;
//   case 3:
//     dayNumber = "Wednesday";
//     break;
//   case 4:
//     dayNumber = "Thursday";
//     break;
//   case 5:
//     dayNumber = "Friday";
//     break;
//   case 6:
//     dayNumber = "Saturday";
//     break;
//   default:
//     dayNumber = "Invalid day!";
// }

// var dayNumber = 3; 
// console.log(dayNumber)

_________________________________________________________________________________________________________________________________________________________

// var dayNumber = 0

// var greeting;

// if (dayNumber === 0) {
//   greeting = "Sunday";
// } else if (dayNumber === 1) {
//   greeting = "Monday";
// } else if (dayNumber === 2) {
//   greeting = "Tuesday";
// } else if (dayNumber === 3) {
//   greeting = "Wednesday";
// } else if (dayNumber === 4) {
//   greeting = "Thursday";
// } else if (dayNumber === 5) {
//   greeting = "Friday";
// } else if (dayNumber === 6) {
//   greeting = "Saturday";
// } else {
//   greeting = "Invalid day number."
//   console.log(greeting)
// } 

// if ((dayNumber === 0) || (dayNumber === 6)) {
//   console.log('Its the Weekends!')
// } else (dayNumber);{
//   console.log(greeting)
// }

_________________________________________________________________________________________________________________________________________________________

// var dayNumber = 0

// var greeting;

// if (dayNumber === 0) {
//     greeting = "Sunday";
// } else if (dayNumber === 1) {
//     greeting = "Monday";
// } else if (dayNumber === 2) {
//     greeting = "Tuesday";
// } else if (dayNumber === 3) {
//     greeting = "Wednesday";
// } else if (dayNumber === 4) {
//     greeting = "Thursday";
// } else if (dayNumber === 5) {
//     greeting = "Friday";
// } else if (dayNumber === 6) {
//     greeting = "Saturday";
// } else {
//     greeting = "Invalid day number."
//     console.log('greeting')
// }

// function businessHour(dayNumber, workHour) {
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var day = days[dayNumber];
//     var working = workHour;
//     if ((dayNumber >= 1 && dayNumber <= 5) && (workHour >= 9 && workHour <= 18)) {
//         console.log(day + " is a workday and at " + working + " is working hour.");
//     } else {
//         console.log(day + " and at " + working + " is NOT working hour.");
//     }
// }

// if ((dayNumber === 0) || (dayNumber === 6)) {
//   console.log('Its the Weekends!')
// }

_________________________________________________________________________________________________________________________________________________________

// function businessHours(dayNumber, hourNumber) { 
//     if (hourNumber >= 9 && hourNumber <= 18) {
//         switch (dayNumber) {
//             case 0:
//                 console.log("Sunday: this is not a workday");
//                 break;
//               case 1:
//                 console.log("Monday: this is a business hour.");
//                 break;
//               case 2:
//                 console.log("Tuesday: this is a business hour.");
//                 break;
//               case 3:
//                 console.log("Wednesday: this is a business hour.");
//                 break;
//               case 4:
//                 console.log("Thursday: this is a business hour.");
//                 break;
//               case 5:
//                 console.log("Friday: this is a business hour.");
//                 break;
//               case  6:
//                 console.log("Saturday: this is not a workday");
//                 break;
//               default:
//                 console.log("Invalid day number")
//             }
//         } else {
//             return("This is not a business hour.");
//         }
//     }

// businessHours(4,17)