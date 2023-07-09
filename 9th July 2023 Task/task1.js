

// let x = 250 ;
// create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

let x = 250;

console.log(x * 0.25);

// /

// /
// Array Tasks : 
// 1
// Correct the syntax error
//  [ 1,7  9  45, ]

let arr = [1, 7, 9, 45];
console.log(arr);

//  ["Str" "alex","moh"

let arr2 = ["Str" , "alex","moh"]

//  'the','fox' 'over' lazy, 'dog',  ]

let arr3 = ['the','fox', 'over', 'lazy', 'dog'];

// /




// /
// 2
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

var fruits = ["Tomato","Banana","Watermelon"];


console.log(`Index of Banana: ${fruits.indexOf("Banana")}
Index of Tomato: ${fruits.indexOf("Tomato")}
`);




// /


// /
// 3
// Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)
// /


let favThings = ["Mandi", "Mansaf", "Football", "Basketball", "Taekwondo", "Spider-Man: Into the Spider-Verse", "Interstellar"]


// /
// 4
// Create a Variable to return the first element in an array 
// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"
// /

let arr4 = [1, 4, 5];
let firstElementOfArray4 = arr4[0];


// /
// 5
// Create a Variable to return the lastOfArray element in an array 

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"
// /

let arr5 = [1, 4, 5];
let lastElementOfArray5 = arr4[arr4.length - 1];


// /
// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]
// /
var copyArray = [0, 5, 7, 9];
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8)
array.push(10);
console.log(array);



// /
// 7
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]
// /

var copyArray = [0, 5, 7, 9];

copyArray.shift();
copyArray.pop()
copyArray.pop()
copyArray.push(9);
copyArray.push(-7);
copyArray.push(3.5);
console.log(copyArray);


// /
// 8.
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let unsortedArray = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let sortedArray = unsortedArray.sort();
sortedArray.shift();
sortedArray.shift();
sortedArray.unshift(-4, -3)
console.log(sortedArray);



