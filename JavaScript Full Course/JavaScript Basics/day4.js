//arithmetic
console.log(2+3);
console.log(4-3);
console.log(6/3);
console.log(4%3);
console.log(2**3);

//assignment
let x = 5;
let y = "5";
x = x + y;
console.log(x);

//comparision
let p = 5;
let q = "6";
console.log(p==q)        //js convert strings to no and then compair
console.log(p === q);       //strictly check no change in string    type check  

//convert
let z = 20;
let a = Number(z);
console.log(a);

let c = "34ac"
let d = Number(c);
console.log(d);     //NaN Not a numver  //type no

// null -> 0
// undefind -> NaN
console.log(Boolean(1));

//No -> string
let f = 45;
let g = String(f);
console.log(g);

//Computer science challange: 
let h = 0.2
let i = 0.4;
let j = h + i;
console.log(j)
console.log(j == 0.6)   //false





//Rules To Remember:
// 1. Null is loosely equal to undefind only    
console.log(null == undefined)      //true
console.log(null === undefined)     //false     type diff

// 2. For < > <= >= these case (null --> number , undefined --> NaN)    //means null become 0
console.log(null >= 0); //true

console.log("ranjan" > "maiti")
console.log(10>="10")   //string to no

console.log( NaN == NaN)    //false




//loop
for(let i=0; i<6; i++){
    console.log(i);
}

let k = 0;
while(k<10){
    console.log(k);
    k++;
}

k = 0;

do{
    console.log(k)
    k++;
}
while(k<10)


let age = 1;
if(age == 1){
    console.log("One")
}       // && ||