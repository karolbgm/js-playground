//FUNCTION DECLARATION
function multiply(x, y) {
    return x * y;
}

console.log(multiply(3, 5));

//FUNCTION EXPRESSION ASSINGNING ANOM FUNC
let result = function (x, y) {
    return x * y;
}

console.log(result(4,5));

//ARROW FUNCTION
let mult = (x,y) => {
return x * y;
}
//ARROW FUNCTION WITH IMPLICIT RETURN
let add = (x, y) => x + y;

console.log(add(1,2));
console.log(mult(7, 2));


let greeter = name => console.log(`Hi ${name}`);

//ARROW ANONYMOUS
//arrow funcitions are anonymous unless they are part of an expression
(age) => console.log(`Your age is ${age}`);

// console.log(greeter("Karol"))
greeter("karol");