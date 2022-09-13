//Problem 1 : Check whether a number is Prime or not

let number = 2;
let flag = "Not a Prime Number";

for (i = 2; i < number; i++) {
  if (number % i= 0) {
    flag = "Prime Number"
    break;
  }
}
console.log(flag);

