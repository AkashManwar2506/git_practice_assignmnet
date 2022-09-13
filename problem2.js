//Problem 2 : Check whether a string is palindrome or not.

let str = "racecarer";
let flag = "Not a Palindrome"

for (i = 0; i < str.length / 2; i++) {
  if (str[i] == str[str.length - 1]) {
    flag = "Yes. It is a palindrome."
  }
}
console.log(flag);