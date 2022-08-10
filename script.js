// 1.
/* 
    What is the significance of, and reason for,
     wrapping the entire content of a JavaScript source file in a function block?

    answer:- 
        - This technique creates a closure around the entire contents of the file which, perhaps most importantly,
         creates a private namespace and 
        thereby helps avoid potential name clashes between different JavaScript modules and libraries.

*/

// 2.
/*
    What is the significance, and what are the benefits, of 
    including 'use strict' at the beginning of a JavaScript source file?

    answer:-
        - using 'use strict' is a way of stricter parsing and error handling on javascript code at runtime.
        code errors that whould have ignored or would have failed silently will now generate errors or throw exceptions.
        In general it's a good practice.
        
        * makes debugging easier.
        * prevents accidental globals. without a strict mode, assigning a value to an undefined variable will create it as a global variable with that name.
            In strict mode, attempting to do so throws an error.
*/

// 3.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

/*
    0.1 + 0.2 will give 0.30000000000000004
    so, 0.1 + 0.2 != 0.3.
*/

// 4.
/*
    Write a sum method which will work properly when invoked using either syntax below.

    console.log(sum(2,3));   // Outputs 5
    console.log(sum(2)(3));  // Outputs 5
*/
const sum = function (a) {
    if (arguments.length == 2) {   // checking here whether arguments's length of the function is one or or two, if it is 2, thr arguments are like (2,3), if it is not equal to 2 here means, the arguments are like (2)(3);
        return arguments[0] + arguments[1];  // if the arguments length is 2, we are adding those values.
    } else {    //  if the arguments is only one means it's structure is ()(). so we are returning another function to get the value
        return function (b) {
            return a + b;
        }
    }
}
console.log(sum(2)(3));
console.log(sum(2,3));

// 5.
// What will the code below output to the console and why?

var arr1 = "john".split('');   // split will split the string by the separator. and returns the array. [j,o,h,n]
var arr2 = arr1.reverse();
/*
    reverse() method not only returns the reversed array but also it reverses the actual array.
    In this case, it is 'arr1'. reverse() method returns a reference to the array itself, in this case , 'arr1'.
    As a result, arr2 is rather than a copy of arr1, it is simply the refernce to arr1.
    Therefore if anything done to arr2, arr1 will be affected since arr1 and arr2 are simply references to the same object.
    arr1 will be [n,h,o,j]. So arr2 also [n,h,o,j].

*/
var arr3 = "jones".split('');  // arr3 will be [j,o,n,e,s]
arr2.push(arr3);  // previously arr2 is [n,h,o,j]. push(arr3) into the arr2. [n,h,o,j,[j,o,n,e,s]]. So arr1 also affected.
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));  //  arr1 length is 5 amd slice(-1) will  remove the last index of arr1 which is j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));  //  arr2 length is 5 amd slice(-1) will  remove the last index of arr2 which is j,o,n,e,s

// 6.
// What will be the output of this code?
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();

/*
    output is undefined.
    we usually think it is 21 or 20.
    But whats wrong here is, when the function is executed,
    it checks whether there is a local variable x or not.
    'var x = 20' is there in the function after the 'console.log(x)'
    var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to.
    it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.
    So, it gives output as 'undefined' 'but not any refernce error'.

    if we remove 'var x = 20' in the function, output will be 21.
    if we remove 'var x = 20' in the function and global 'var x = 21', output will be 'reference error: x is not defined'.

*/

// 7.
// What do the following lines output, and why?
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
/*
    '1 < 2 < 3' it returns true. It compares left to right. 1 < 2 is true. true has a value 1 in javascript. after that, 1 < 3 returns true. So, finally it is true.

    '3 > 2 > 1' it returns false. It compares left to right. 3 > 2 is true. true has a value 1 in javascript. after that, 1 > 1 returns false. So, finally it is false.

*/

// 8.
// What will the following code output and why?
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

/*
    output is 3.
    here we can see three closures. each with it's own var b declaration.
    When a variable is invoked closures will be checked in order from local to global until an instance is found.
    due to hoising thecode in inner will be interpreted as 

    function inner () {
        var b; // b is undefined
        b++; // b is NaN
        b = 3; // b is 3
        console.log(b); // output "3"
    }

*/

