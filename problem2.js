//Problem 2 : Check whether a string is palindrome or not.

let str = "racecarer";
let flag ="";

for (i =str.length-1; i>=0; i--) {
  flag+=str[i];
   
} 
if(flag===str)
{
console.log(" string is a palindrome");
}
else
{
console.log("string is not  a palindrome");
}