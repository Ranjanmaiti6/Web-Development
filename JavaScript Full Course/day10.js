//  HOW JS WORKS:

//  1.Memory Allocation Phase;
//  Execution Context
//  a = undefind
//  b = undefind
//  addNumber = full fn code
//  sumResult1 = undefined
//  sumResult2 = undefined

//  2.Exucation Phase;


var a = 10;
var b = 20;

function addNumber(num1 , num2){
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1 , sumResult2);





//  Let Const
//Memory allocation
//   x = <uninitialised>    (Temporal dead zone)    //can't access till any value pass
//   y = <uninitialised>    (Temporal dead zone)    //same
//  addNum = <uninitialised>    (Temporal dead zone)        //const
//  result = <uninitialised>    (Temporal dead zone)

//  Execuation Phase
//  x = 10;
//  y = 20;
//  addNum = fn code
//  result = 30


let x = 10;
const y = 20;

const addNum = function(x,y){
    const sum = x + y;
    return sum;
}

const result = addNum(x,y)
console.log(result);
