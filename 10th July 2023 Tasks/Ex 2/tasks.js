/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let rate = 86;
let result;

if(rate < 50) 
    result = "Fail";

else if (rate >= 50 && rate <= 59) {
    result = "E";
}

else if (rate >= 60 && rate <= 69) {
    result = "D";
}

else if (rate >= 70 && rate <= 79) {
    result = "C";
}

else if (rate >= 80 && rate <= 89) {
    result = "B";
}

else if (rate >= 90 && rate <= 100) {
    result = "A";
}

console.log(result);






