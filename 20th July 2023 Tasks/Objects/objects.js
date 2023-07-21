console.log('Here is : ', 'Object')
console.log("----------------------");

/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)

*/

let myObj = {
    name: {
        first: "Nooraldeen",
        last: "Aloudat"
    },

    age: 20,
    birthDate: "14 December 2002",

    favFood: ["Mansaf", "Kabseh", "Shawarma"],

    favMovies: ["Intersteller", "Spider-Man: Into the Spider-Verse", "Coco", "Joker", "blade runner 2049"]
}

console.log("Nooraldeen's Object");
console.log(myObj);
console.log("----------------------");

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];


/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(obj) {
    let names = [];
    for(let key of obj) {
        names.push(key.name.first);
    }
    return names;
}

console.log(firstName(persons));
console.log("----------------------");

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(obj) {
    let sum = 0;
    for(let key of obj) {
        sum += key.age;
    }
    
    return sum / obj.length;
}

console.log(averageAge(persons));
console.log("----------------------");

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(obj) {

    let fullName = `${obj[0].name.first} ${obj[0].name.last}`;
    let maxAge = obj[0].age;
    for(let key of obj) {
        if(key.age > maxAge) {
            maxAge = key.age;
            fullName = `${key.name.first} ${key.name.last}`;
        }
    }
    return fullName;

}
console.log(olderPerson(persons));
console.log("----------------------");

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj) {

    let fullName = `${obj[0].name.first} ${obj[0].name.last}`;
    let maxAge = obj[0].age;
    for(let key of obj) {
        let currentName = `${key.name.first} ${key.name.last}`;
        if(currentName.length > fullName.length) {
            fullName = currentName;
        }
    }
    return fullName;
}

console.log(longestName(persons));
console.log("----------------------");

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
// (Repeated Question)
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str) {
    let freq = {};
    str = str.toLowerCase().split(' ');

    str.forEach((word) => {
        if(freq.hasOwnProperty(word)) {
            freq[word]++;
        }
        else {
            freq[word] = 1;
        }
    })

    return freq;
}

console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"))
console.log("----------------------");


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(str) {
    let freq = {};
    str = str.toLowerCase().split('');

    str.forEach((char) => {
        if(freq.hasOwnProperty(char)) {
            freq[char]++;
        }
        else {
            freq[char] = 1;
        }
    })

    return freq;
}

console.log(repeatChar("mamababatetacedo"));
console.log("----------------------");

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj ,arr) {
    let wantedObj = {};

    arr.forEach((ele) => {
        if(ele in obj) {
            wantedObj[ele] = obj[ele];
        }
    });
    return wantedObj;
}

console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));
console.log("----------------------");

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(obj) {
    let newArr = []
    for(let prop in obj) {
        newArr.push(prop);
        newArr.push(obj[prop]);
    }
    return newArr;
}

console.log(objectToArray({firstName:"Moh",age:24}));
console.log("----------------------");


/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function arrayToObject(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i+=2) {
        obj[arr[i]] = arr[i+1];
    }
    return obj;
}

console.log(arrayToObject(["firstName","Moh","age",24]));
console.log("----------------------");

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber(obj) {
    let newObj = {};
    for(let key in obj) {
        if(!isNaN(obj[key])) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}))
console.log("----------------------");

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function onlyString(obj) {
    let newObj = {};
    for(let key in obj) {
        if(typeof obj[key] === "string") {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));
console.log("----------------------");

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

function onlyArray(obj) {
    let newObj = {};
    for(let key in obj) {
        if(obj[key].constructor === Array) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
console.log("----------------------");

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/

function keysArray(obj) {
    let arr = [];
    for(let key in obj) {
        arr.push(key);
    }
    return arr;
}
console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
console.log("----------------------");

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(obj) {
    let arr = [];
    for(let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}
console.log(valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
console.log("----------------------");

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

var obj = {a:1,b:3,c:4};
delete obj.b
obj.a = 4;
obj.c = 66;
console.log(obj)
console.log("----------------------");

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: objectLength({a:1,b:2,c:3,d:4})
=> 4
*/

function objectLength(obj) {
    return Object.keys(obj).length;
}

console.log(objectLength({a:1,b:2,c:3,d:4}));
console.log("----------------------");

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function evenValue(obj) {
    let newObj = {};
    for(let key in obj) {
        if(obj[key] % 2 === 0) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(evenValue({a:1, b:2, c:3, d:4}));
console.log("----------------------");

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: longestKey({car:1, school:2, monster:3, alexMercer:4})=> 4
*/

function longestKey(obj) {
    let longest = Object.keys(obj)[0];
    let ans = obj[Object.keys(obj)[0]];
    for(let key in obj) {
       if(key.length > longest.length) {
        ans = obj[key];
       }
    }
    return ans;
}

console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}));
