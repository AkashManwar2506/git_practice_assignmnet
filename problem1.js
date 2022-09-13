//Problem 1 : Check whether a number is Prime or not

let number = 2;
let flag = 0

for (i = 1; i <=number; i++) {
  if (number % i= 0) {
    flag++;
    
  }
if(flag==2)
{
console.log( number,"num is prime number");
}else
{
console.log(number,"number is not a prime");
}
