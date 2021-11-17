// 61


// // Setup
// function testStrict(val) {
//     if (val=== 7) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   testStrict(10);


//   62


//   // Setup
// function compareEquality(a, b) {
//     if (a === b) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   compareEquality(10, "10");


//   63


//  // Setup
// function testNotEqual(val) {
//     if (val != 99) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testNotEqual(10);


//   64


//   // Setup
// function testStrictNotEqual(val) {
//     if (val !== 17) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testStrictNotEqual(10);


//   65


//   function testGreaterThan(val) {
//     if (val>100) {  // Change this line
//       return "Over 100";
//     }
  
//     if (val>10) {  // Change this line
//       return "Over 10";
//     }
  
//     return "10 or Under";
//   }
  
//   testGreaterThan(10);


//   66


//   function testGreaterOrEqual(val) {
//     if (val>=20) {  // Change this line
//       return "20 or Over";
//     }
  
//     if (val>=10) {  // Change this line
//       return "10 or Over";
//     }
  
//     return "Less than 10";
//   }
  
//   testGreaterOrEqual(10);


//   67


//   function testLessThan(val) {
//     if (val<25) {  // Change this line
//       return "Under 25";
//     }
  
//     if (val<55) {  // Change this line
//       return "Under 55";
//     }
  
//     return "55 or Over";
//   }
  
//   testLessThan(10);


//   68


//   function testLessOrEqual(val) {
//     if (val<=12) {  // Change this line
//       return "Smaller Than or Equal to 12";
//     }
  
//     if (val<=24) {  // Change this line
//       return "Smaller Than or Equal to 24";
//     }
  
//     return "More Than 24";
//   }
  
//   testLessOrEqual(10);


//   69


//   function testLogicalAnd(val) {
//     // Only change code below this line
  
//     if (val <= 50 && val >= 25) {
      
//         return "Yes";
      
//     }
  
//     // Only change code above this line
//     return "No";
//   }
  
//   testLogicalAnd(10);


//   70


//   function testLogicalOr(val) {
//     // Only change code below this line
  
//     if (val < 10 || val > 20) {
//       return "Outside";
//     }
  
//     // Only change code above this line
//     return "Inside";
//   }
  
//   testLogicalOr(15);


// 71


// function testElse(val) {
//     let result = "";
//     // Only change code below this line
  
//     if (val > 5) {
//       result = "Bigger than 5";
//     }
  
//     else {
//       result = "5 or Smaller";
//     }
  
//     // Only change code above this line
//     return result;
//   }
  
//   testElse(4);


//   72


//   function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     }
  
//     else if (val < 5) {
//       return "Smaller than 5";
//     } else {
  
//     return "Between 5 and 10";}
//   }
  
//   testElseIf(7);


//   73


//   function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
  
//   orderMyLogic(7);


//   74


//   function testSize(num) {
//     // Only change code below this line
//   if (num < 5) {
//     return 'Tiny'
//   } else if (num < 10) {
//     return 'Small'
//   } else if (num < 15) {
//     return 'Medium'
//   } else if (num < 20) {
//     return 'Large'
//   } else {
//     return 'Huge'
//   }  
//     // Only change code above this line
//   }
  
//   testSize(7);


//   75


//   const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
// if (strokes == 1) {
//     return names[0]
//   } else if (strokes <= par - 2) {
//     return names[1]
//   } else if (strokes == par - 1) {
//     return names[2]
//   } else if (strokes == par) {
//     return names[3]
//   } else if (strokes == par + 1) {
//     return names[4]
//   } else if (strokes == par + 2) {
//     return names[5]
//   } else if (strokes >= par + 3) {
//     return names[6]
//   }
//   // Only change code above this line
// }
// golfScore(5, 4);


// 76


// function caseInSwitch(val) {
//   let answer = "";
//   // Only change code below this line
//   switch (val) {
// case 1:
//     return "alpha";
//     break;
// case 2:
//     return "beta";
//     break;
// case 3:
//     return "gamma";
//     break;    
// default:
//     return "delta";
//     break;
//   }
//   // Only change code above this line
//   return answer;
// }

// caseInSwitch(1);



// 77


// function switchOfStuff(val) {
//   let answer = "";
//   // Only change code below this line
// switch (val) {
// case "a":
//     return "apple";
//     break;
// case "b":
//     return "bird";
//     break;
// case "c":
//     return "cat";
//     break;    
// default:
//     return "stuff";
//     break;
//    }
//   // Only change code above this line
// }

// switchOfStuff(1);


// 78


// function sequentialSizes(val) {
//   let answer = "";
//   // Only change code below this line
// switch(val) {
//   case 1:
//   case 2:
//   case 3:
//     answer = "Low";
//     break;
//   case 4:
//   case 5:
//   case 6:
//     answer = "Mid";
//     break;
//   case 7:
//   case 8:
//   case 9:
//     answer = "High";
//     break;
// }
//   // Only change code above this line
//   return answer;
// }

// sequentialSizes(1);


// 79


// function chainToSwitch(val) {
//   let answer = "";
//   // Only change code below this line
// switch(val) {
//   case "bob":
//     answer = "Marley";
//     break;
//   case 42:
//     answer = "The Answer";
//     break;
//   case 1:
//     answer = "There is no #1";
//     break;
//   case 99:
//     answer = "Missed me by this much!";
//     break;  
//   case 7:
//     answer = "Ate Nine";
//     break; 
// }
//   // Only change code above this line
//   return answer;
// }

// chainToSwitch(7);


// 80


// function isLess(a, b) {
//   // Only change code below this line
//   return a < b
//   // Only change code above this line
// }

// isLess(10, 15);


