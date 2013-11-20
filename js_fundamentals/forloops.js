// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for(var i = 0; i <= 20; i++){
  if((i % 2) == 0){
    console.log(i + " is even.");
  }else{
    console.log(i + " is odd.");
  };
};
0 is even. VM8388:2
1 is odd. VM8388:2
2 is even. VM8388:2
3 is odd. VM8388:2
4 is even. VM8388:2
5 is odd. VM8388:2
6 is even. VM8388:2
7 is odd. VM8388:2
8 is even. VM8388:2
9 is odd. VM8388:2
10 is even. VM8388:2
11 is odd. VM8388:2
12 is even. VM8388:2
13 is odd. VM8388:2
14 is even. VM8388:2
15 is odd. VM8388:2
16 is even. VM8388:2
17 is odd. VM8388:2
18 is even. VM8388:2
19 is odd. VM8388:2
20 is even. VM8388:2
undefined

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for(var i = 0; i <= 10; i++){
  console.log(i + " x 9 = " + (i*9));
};
0 x 9 = 0 VM8435:2
1 x 9 = 9 VM8435:2
2 x 9 = 18 VM8435:2
3 x 9 = 27 VM8435:2
4 x 9 = 36 VM8435:2
5 x 9 = 45 VM8435:2
6 x 9 = 54 VM8435:2
7 x 9 = 63 VM8435:2
8 x 9 = 72 VM8435:2
9 x 9 = 81 VM8435:2
10 x 9 = 90 VM8435:2
undefined

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


function assignGrade(score){if(score >= 80){return "A";}else if (score >= 70){return "B";}else if(score >= 60){return "C";}else if (score >= 50){return "D";}else{return "F";};};
undefined
for(var i = 60; i <= 100; i++){console.log("For " + i + " you got a " + assignGrade(i) + ".");};
For 60 you got a C. VM8503:2
For 61 you got a C. VM8503:2
For 62 you got a C. VM8503:2
For 63 you got a C. VM8503:2
For 64 you got a C. VM8503:2
For 65 you got a C. VM8503:2
For 66 you got a C. VM8503:2
For 67 you got a C. VM8503:2
For 68 you got a C. VM8503:2
For 69 you got a C. VM8503:2
For 70 you got a B. VM8503:2
For 71 you got a B. VM8503:2
For 72 you got a B. VM8503:2
For 73 you got a B. VM8503:2
For 74 you got a B. VM8503:2
For 75 you got a B. VM8503:2
For 76 you got a B. VM8503:2
For 77 you got a B. VM8503:2
For 78 you got a B. VM8503:2
For 79 you got a B. VM8503:2
For 80 you got a A. VM8503:2
For 81 you got a A. VM8503:2
For 82 you got a A. VM8503:2
For 83 you got a A. VM8503:2
For 84 you got a A. VM8503:2
For 85 you got a A. VM8503:2
For 86 you got a A. VM8503:2
For 87 you got a A. VM8503:2
For 88 you got a A. VM8503:2
For 89 you got a A. VM8503:2
For 90 you got a A. VM8503:2
For 91 you got a A. VM8503:2
For 92 you got a A. VM8503:2
For 93 you got a A. VM8503:2
For 94 you got a A. VM8503:2
For 95 you got a A. VM8503:2
For 96 you got a A. VM8503:2
For 97 you got a A. VM8503:2
For 98 you got a A. VM8503:2
For 99 you got a A. VM8503:2
For 100 you got a A. VM8503:2
undefined