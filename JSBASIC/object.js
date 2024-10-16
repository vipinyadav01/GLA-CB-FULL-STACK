//object= the collection  of keys and collection object=>keys=>value=>access

// let person = {
//   fullname: "vipin yadav",
//   Age: 45,
//   Salary: 35,
// };

// let personn = new object();

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

// console.log(personn); // undefined
// var person3 = new Object();
// console.log(person3); // Object {}
//
//
//
//
//----------------------------Temporal dead zome ---------------------//
//--time between declaration and initialization  for hoisting variable
//
//-----------------Execution Contex-----------------------//
//It is an environment to execute your js code
// an Execution Context refers to the environment in which the JavaScript code is executed. It's a temporary scope created by the JavaScript engine to execute a piece of code.
//
//
//An Execution Context consists of three components:
//
//1:-Variable Object (VO): This is the scope chain that contains all the variables, functions, and arguments defined in the current scope.
//2:-Scope Chain: This is a chain of Variable Objects that are linked together to form a scope hierarchy. The scope chain is used to resolve variable references.
//3:-This: This is the value of the this keyword, which is determined by the execution context.
//
//
//
// When the JavaScript engine executes a script, it creates a Global Execution Context, which is the top-most scope. The Global Execution Context has a global object (usually the window object in a browser or the global object in a Node.js environment) as its Variable Object.
// When a function is called, a new Execution Context is created for that function, which has its own Variable Object, Scope Chain, and this value. This new Execution Context is pushed onto the call stack, and when the function returns, it's popped off the call stack.
// In the context of the code you provided, the Execution Context would be the global scope, and the person and personn variables would be part of the Variable Object in that scope.
//
//
//
//------------------1:-Call Stack-------------//
//
//
//
// The call stack is a mechanism used by the JavaScript engine to keep track of the execution context of
//A Call Stack is a data structure that keeps track of the active subroutines (functions) in a program. It's a Last-In-First-Out (LIFO) stack, meaning that the most recently called function is at the top of the stack.
//
// When a function is called, a new block is added to the top of the call stack, which contains the function's parameters, local variables, and return address. When the function returns, its block is removed from the top of the call stack.
//
//
// function A() {
//     console.log('A');
//     B();
//   }
//
//   function B() {
//     console.log('B');
//     C();
//   }
//
//   function C() {
//     console.log('C');
//   }
//
//   A();
//
//The call stack would look like this:
// A is called, so it's added to the call stack: [A]
// A calls B, so B is added to the call stack: [A, B]
// B calls C, so C is added to the call stack: [A, B, C]
// C returns, so it's removed from the call stack: [A, B]
// B returns, so it's removed from the call stack: [A]
// A returns, so it's removed from the call stack: []
//
//------------browser engion--------------//
//
//
// A Browser Engine is a software component that powers a web browser. It's responsible for rendering web pages, executing JavaScript code, and handling user interactions.
//
// Some popular browser engines include:
//
// Google Chrome's V8 engine
// Mozilla Firefox's Gecko engine
// Microsoft Edge's Blink engine
// Safari's WebKit engine
// The browser engine is responsible for:
//
// Parsing HTML, CSS, and JavaScript code
// Rendering web pages using the parsed code
// Executing JavaScript code and handling events
// Providing APIs for web developers to interact with the browser
//
//
//
//------------------web api------------------//
//
// A Web API (Application Programming Interface) is a set of APIs provided by the browser engine to allow web developers to interact with the browser and access various features.
//
// Some examples of Web APIs include:
//
// DOM (Document Object Model) API: allows developers to manipulate the HTML document structure
// CSSOM (CSS Object Model) API: allows developers to manipulate CSS styles
// Web Storage API: allows developers to store data locally on the client-side
// Web Workers API: allows developers to run JavaScript code in the background
// Web Sockets API: allows developers to establish real-time communication between the client and server
//
//
//
//
//
// -------------------Call By Function---------------//
//
//
// function fun1( fun2) {}
// function fun2() {}
// fun1(fun2);
// fun1 is called, so it's added to the call stack: [fun1]
// fun1 calls fun2, so fun2 is added to the call stack: [fun1, fun2]
// fun2 returns, so it's removed from the call stack: [fun1]
// fun1 returns, so it's removed from the call stack: []
