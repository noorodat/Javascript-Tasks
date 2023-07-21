console.log('Here is : ', 'Reduce & Filter');
console.log("##########################");
//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
console.log("Task1:");

function avgAge(arr) {
    let sum = arr.reduce((total, person) => total + person.age, 0);
    return sum / arr.length;
}

console.log(avgAge(persons));

console.log("-----------------");
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
console.log("Task2:");

function longestName(arr) {
    
    let longest = `${arr[0].name.first } ${arr[0].name.last}`;
    longest = arr.reduce((acc, current) => {

        let currentFullName = `${current.name.first} ${current.name.last}`;
        if(currentFullName.length > acc.length ) {
            return currentFullName;
        }
        else {
            return acc;
        }

    }, longest);
    
    return longest;
}

console.log(longestName(persons));

console.log("-----------------");

// Another way
// function longestName(arr) {
//     let longest = (arr[0].name.first + arr[0].name.last);
//     for(let i = 0; i < arr.length; i++) {
//         if((arr[i].name.first + arr[i].name.last).length > longest.length) {
//             longest = arr[i].name.first + arr[i].name.last;
//         }
//     }
//     return longest;
// }

// console.log(longestName(persons));

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/

console.log("Task3:");

function maxNumber(arr) {
    let maxNum = arr[0];
    maxNum = arr.reduce((acc, curr) => {
        if(acc > curr) {
            return acc;
        }
        else {
            return curr;
        }
    }, maxNum);

    return maxNum;
}

console.log(maxNumber([1,2,4,9]));
console.log("-----------------");

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
console.log("Task4:");

function repeatChar(str ,char) {
    let cnt = 0;
    Array.from(str).reduce((acc, curr) => {
        if(curr === char || acc === char) {
            cnt++;
        }
    });
    return cnt;
}

console.log(repeatChar("Hello world", 'l')) // 3
console.log("-----------------");
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

console.log("Task5:");

function usAndNumberBeetweenUs(n1, n2) {

    let start = n1;
    let end = n2;
    let arr = [];

    if(n1 > n2) {
        start = n2;
        end = n1;
    }
    
    for(let i = start; i <= end; i++) {
        arr.push(i);
    }


    return arr;

}

console.log(usAndNumberBeetweenUs(8, 20));
console.log("-----------------");


//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

console.log("Task6:");

function evenOnly(arr) {
    let evenArray = arr.filter((e) => {
        return e % 2 === 0;
    });
    return evenArray;
}

console.log(evenOnly([1,8,6,4]));
console.log("-----------------");
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

console.log("Task7:");

function multiFour(arr) {
    let multi4 = arr.filter((ele) => {
        return ele % 4 === 0;
    });

    return multi4;
}

console.log(multiFour([1,8,6,4]));
console.log("-----------------");

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

console.log("Task8:");

function containChar(arrStr, char) {
    let ansArr = [];
    arrStr.filter((e) => {
        if(e.includes(char)) {
            ansArr.push(e);
        }
    });
    return ansArr;
}

console.log(containChar(["hello","world"],'l'));
console.log("-----------------");

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
console.log("Task9:");

function evenIndexOddLength(strArr) {
    let ans = strArr.filter((str, indx) => {
        if(str.length % 2 !== 0 && indx % 2 === 0) {
            return str;
        }
    });

    return ans;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];

console.log( evenIndexOddLength(strings));
console.log("-----------------");
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

console.log("Task10:");
function olderThan(arr, num) {
    let ans = arr.filter((ele) => {
        return ele.age > num;
    })
    return ans;
}

console.log(olderThan(persons,56));
console.log("-----------------");

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
console.log("Task11:");
function shorterThan(strArr, num) {
    let ans = strArr.filter((str) => str.length < num);
    return ans;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterThan(strings,5));
console.log("-----------------");

// if you finish the exercises review the material of the week and help your classmate
