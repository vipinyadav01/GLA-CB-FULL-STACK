//we can declare a variable with var, let and const by using var keyword and it will be declared and initialized
//we use scope to show that

// function scope() {
//   if (true) {
//     var a = 10;
//     console.log(a);
//   }
//   console.log(a);
// }
// scope();
// consol.log(a);

// let a = 10;
//
//
//it will be declared and initialized and it will not give error

// var a = 20;

// let a = 30;
// const a = 40;
//
//
//
// it will not be declared and initialized and it will give error

// let a = 10;
// var a = 10;

// console.log(a);
//
//
//
//
//
// reassignment of let variable is possible but not for var and const

// let a = 10;
// a = 20;
// console.log(a);
//
//
//
//
// Data types in js

// Primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
//
//
//
//
// var a = "Hello";
// console.log(typeof (a));

// var a = 10 + 10 + "ab";

// console.log(a);
//
//
//

// flag is a boolean data type

// let flag = true;

// console.log(typeof flag);

//show undefined data type
//
//
//
// let a;

// console.log(typeof a);
//
//
//

//object data type and array data type

// let obj

// let arr = [10, 20, 30];
// console.log(arr);

// console.log(typeof (arr));
//
//
//

//show slide data type and function data type

// function slide() {
//   let a = 10;
//   let b = 20;
//   let c = 30;
//   let d = 40;
//   let e = 50;
//   let f = 60;
// }

// console.log(slide());
//
//
//
//
//bigint data type

// let a = 10;

// console.log(typeof a);
//
//
//
//
//null data type and null is a value

// Creating a null data type

// let myNullValue = null;
// console.log(typeof myNullValue);

// Output: object
//
//
//
//

//------///----------------///Non primitive data type -------///-------///

//-----------Array DataType-------------///

// Same type of homogeneous element in java ///

// Collection of mom-homogeneous // homogeneous element ///

//let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//arr.push("vip"); //insert element at end

//arr.unshift("hello"); //insert element at start

//arr.shift(); //delete element from start

//arr.pop(); //delete element from end

//console.log(arr[2]) /// add index  or array inside array

//console.log(arr);

//let val = arr.splice(0, 2); //this is a method that (starting index and end index)that cut the element
//only print the two element from starting

//console.log(val);
//
///
///
//
// shallow copy  and element copy
// let arr = [2, 3, 4, 5, 6, 7];
//let arr1 = arr.slice(); // shallow copy
// let arr2 = [...arr]; // element copy

// console.log(arr1);
// console.log(arr);


