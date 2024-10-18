//----------------------Array Methods-----------------//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.push(9);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// arr.splice(0, 2);
// arr.reverse();
// arr.sort();
// arr.concat(arr2);
// arr.slice(0, 2);
// console.log(arr);

//--------------------------Map-Function------------------------//
//The map function is a built-in method in JavaScript that is used with arrays.
// It creates a new array by applying a provided function to each element of the original array.
//The map function does not modify the original array; instead, it returns a new array containing the results of the function applied to each element.
//
//
//let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//function myMap(item) {
//return item * 2; // This function doubles each item
//}

//let newArr = arr.map(myMap); // Apply the myMap function to each element of arr

//console.log(newArr);

//
//
//
//
//---------------------filter function-----------//
//The filter function is a built-in method in JavaScript that is used with arrays. It creates a new array containing all elements of the original array that pass a test specified by a provided function. Unlike the map function, which transforms each element, the filter function is used to select elements based on a condition.
//let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//function isEven(item) {
//return item % 2 === 0; // This function checks if the number is even
//}

//let evenNumbers = arr.filter(isEven); // Apply the isEven function to filter the array

//console.log(evenNumbers); //

//Question :- you have an array of number .filter out the even  number then square the remaining elemnt & thenn return the sum of this square .
//
//
//
// let arr = [1, 2, 3, 4, 5, 6];
// let oddNumbers = arr.filter((item) => item % 2 == 0);
// let squaredOddNumbers = oddNumbers.map((item) => item * item);
// let sumOfSquares = squaredOddNumbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sumOfSquares);
// console.log(oddNumbers);
// console.log(squaredOddNumbers);
//
//
//
//----------------ForEach--------Update the item-----------//
//In JavaScript, forEach is a method that belongs to the Array prototype. It is used to execute a function once for each element in an array.
//let arr = [1, 2, 3, 4, 5];
//
//arr.forEach(function(element, index, array) {
//  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
//});
//
// create the function that takes an array of string ,filter out the string with a length less than 5 , capitalize the remaining string & then concated then into a songle string.
let arr = ["hello", "world", "abc", "def", "ghi"];

let result = "";
arr.forEach((element) => {
  if (element.length >= 5) {
    result += element.toUpperCase() + " ";
  }
});

console.log(result);
