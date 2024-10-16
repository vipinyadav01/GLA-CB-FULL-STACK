function calculator(a, b, add ,sub ,multi, div, sign) {
    if (sign =='+'){
        console.log(operation(a, b));//call by function
    }   
    if (sign =='-'){
        console.log(sub(a, b));//call by function
    }
    if (sign =='*'){
        console.log(multi(a, b));//call by function
    }
    if (sign =='/'){
        console.log(div(a, b));//call by function
    }
    
}

function add(a, b) {
  console.log(add(a, b));
}
function sub(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
//-------higher order function --------------//
//
// calculator(10,25, add ,sub, multi, div, '+');
// calculator(10,25, add, sub, multi, div, '-');
// calculator(10,25, add, sub, multi, div, '*');
// calculator(10,25, add, sub, multi, div, '/');

