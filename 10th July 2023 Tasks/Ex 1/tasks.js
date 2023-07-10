/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

var a = parseInt(prompt("1 - Enter the first number"));
var b = parseInt(prompt("1 - Enter the sec number"));

var maxNumber = Math.max(a,b);
  
alert(`Max number is : ${maxNumber}`);

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

var num1 = parseInt(prompt("2 - Enter the first number"));
var num2 = parseInt(prompt("2 - Enter the sec number"));
var num3 = parseInt(prompt("2 - Enter the third number"));

if (num1 * num2 * num3 < 0) {
    alert("Sign is -");
}
else {
    alert("Sign is +");
}
  


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/


var num1 = parseFloat(prompt("3 - Enter the first number"));
var num2 = parseFloat(prompt("3 - Enter the sec number"));
var num3 = parseFloat(prompt("3 - Enter the third number"));

if (num1 >= num2 && num1 >= num3) {
    if(num2 > num3) {
        alert(`${num1} ${num2} ${num3}`);
    }
    else {
        alert(`${num1} ${num3} ${num2}`);
    }
}

else if (num2 >= num1 && num2 >= num3) {
    if(num1 > num3) {
        alert(`${num2} ${num1} ${num3}`);
    }
    else {
        alert(`${num2} ${num3} ${num1}`);
    }
}

else  {
    if(num1 > num2) {
        alert(`${num3} ${num1} ${num2}`);
    }
    else {
        alert(`${num3} ${num2} ${num1}`);
    }
}



  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
var arr = [];

for(let i = 0 ; i < 5; i++) {
    var num = parseFloat(prompt(`4 - Enter the ${i+1} number`));
    arr.push(num);
}

let maxValue = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
        maxValue = arr[i];
    }
}

alert(`Max number out of them ${maxValue}`);


 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
var x = prompt(`5 - Enter X`);
var y = prompt(`5 - Enter Y`);

if(x > y) {
    alert("Hello World.");
}
else {
    alert("Goodbye.")
}

 /******* End Your Code ********* */





