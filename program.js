// function house (num) {
//      let sum = 6 + (num - 1) * 5;
//      return sum;
//   }
//   console.log(house(1));
//   console.log(house(4));
//   console.log(house(86));

// function NaturalNumber (number){
//     if(number <= 0){
//         return false;
//     }
//     else if(number >= 10){
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// console.log(NaturalNumber(-15));
// console.log(NaturalNumber(1));
// console.log(NaturalNumber(10));

// function LeapYear(num) {
//     if ((num % 4 == 0 && num % 100 != 0) || (num % 400 == 0)) {
//         return true; 
//     } 
//     else {
//         return false; 
//     }
// }
// console.log(LeapYear(2016));
// console.log(LeapYear(2023));
// console.log(LeapYear(2024));

// function doubleFactorial(num) {

//     if (num == 0 || num == 1) {
//       return 1;
//     }
  
//     return num * doubleFactorial(num - 2);
//   }
//   console.log(doubleFactorial(9));
//   console.log(doubleFactorial(3));
//   console.log(doubleFactorial(6));

// function fib(n) {
//     let a = 0;
//     let b = 1;
//     for (let i = 2; i <= n; i++) {
//       let sum = a + b;
//       a = b;
//       b = sum;
//     }
//     return b;
//   }
//   console.log(fib(3));
//   console.log(fib(7));
//   console.log(fib(77));

// function reverseNumber(num) {
//     if(num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9 ){
//         return "It’s one digit"
//     }
//     let rev = (num).toString().split('').reverse().join('');
//     return rev;
//   }
//   console.log(reverseNumber(5121));
//   console.log(reverseNumber(1));
//   console.log(reverseNumber(2121));
  
// function mean(num1, num2, num3) {
//     if (num1 == num2 && num2 == num3) {
//         return 3;
//     }
//     else if (num1 == num2 || num2 == num3 || num1 == num3) {
//         return 2;
//     }
//     else {
//         return 0;
//     }
// }
// console.log(mean(3, 4, 3));
// console.log(mean(1, 1, 1));
// console.log(mean(1, 4, 3));

// function BigNumber(num) {
//     return Math.max(...`${Math.abs(num)}`.split('').map(Number));
// }
// console.log(BigNumber(87654));
// console.log(BigNumber(123));
// console.log(BigNumber(5498165));

// function multiple (num){
//     let cnt = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//       cnt += i % 10;
//     }
//     return cnt / 2;
// }   
// console.log(multiple(42));

