//object= the collection  of keys and collection object=>keys=>value=>access

let person = {
  fullname: "vipin yadav",
  Age: 45,
  Salary: 35,
};

let personn = new object();

//
//
//
//
//
//------------------------------hosted---------------------//
//
// In JavaScript, "hoisting" is a behavior where variable and function declarations are moved to the top of their scope, regardless of where they are actually declared. This means that variables and functions can be used before they are declared.

// In the context you provided, the line let personn = new object is not actually hoisted. The let keyword is a block-scoped variable declaration, which means it is not hoisted to the top of the script.

// However, if you were to declare a variable using the var keyword, like this: var personn = new object, then it would be hoisted to the top of the script. But the assignment personn = new object would still occur at the point where it is written in the code.

console.log(personn); // undefined
var person3 = new Object();
console.log(person3); // Object {}

//
//
//
//
//----------------------------Temporal dead zome ---------------------//
//--time between declaration and initialization  for hoisting variable
//
