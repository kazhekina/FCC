// let a = 5;
// let b = 1;
// a++;
// // Add your code below this line
// console.log(a);
// let sumAB = a + b;
// console.log(sumAB);


// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Add your code below this line
// console.log(typeof seven);
// console.log(typeof three);


// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);


// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);


// let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// console.log(innerHtml);


// let x = 7;
// let y = 9;
// let result = "to come";
// if(x === y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }
// console.log(result);


// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }
//   let result = getNine();
//   console.log(result);


// function raiseToPower(b, e) {
//     return Math.pow(b, e);
//   }
//   let base = 2;
//   let exp = 3;
//   let power = raiseToPower(base, exp);
//   console.log(power);


// function countToFive() {
//     let firstFive = "12345";
//     let len = firstFive.length;
//     // Fix the line below
//     for (let i = 0; i < len; i++) {
//     // Do not alter code below this line
//       console.log(firstFive[i]);
//     }
//   }
//   countToFive();


// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     row = [];
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);