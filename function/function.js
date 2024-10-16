// funtion fun1(){
//     let a = 10;
//     let b = 20;

//     function fun2(a, b){
//         return a + b;
//     }
//     return fun2;
// }

// let returnedfunction = fun1();
// consol.log(returnedfunction(a, b));

//-----------------direct call -----------------//
// function fun1() {
//   let a = 10;
//   let b = 20;

//   function fun2(a, b) {
//     return a + b;
//   }
//   return funtion ko krege uske baad fun2 ko krege
//   return function () {
//     return fun2(a, b);
//   };
// }

// let returnedFunction = fun1();
// console.log(returnedFunction());

//-------------using closure-----------//
function fun1() {
  let a = 10;
  let b = 20;

  function fun2() {
    return a + b;
  }
  return fun2;
}

let returnedFunction = fun1();
console.log(returnedFunction());
