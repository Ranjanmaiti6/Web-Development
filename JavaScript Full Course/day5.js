let a = 10;
let b = 0.55656544532;
console.log(b.toFixed(4))       //take 4 dig after dec and also roundoff    //also it become string     //b not changed

console.log(b.toPrecision(5))   //total how much degits
console.log(b.toString())

let c = new Number(20); //create object
let d = new Number(20); 
console.log(typeof c)
console.log( c == d )   //false cause object, obj can compair if both point same no

let obj1 = {
    name : "Ranjan"
}
let obj2 = {
    name : "Ranjan"
}
console.log(obj1 == obj2)   //false. both point other memory location

console.log(Boolean(null))  //false not point any
console.log(Boolean([]))    //arrey obj any thing ture



//Maths:
console.log(Math.abs(-4))   //absolute
console.log(Math.PI)
console.log(Math.LN10)
console.log(Math.ceil(2.3))     //upper
console.log(Math.floor(2.3))    //lower

console.log(Math.random())      //random value generate     [0,1)       ***

console.log(Math.floor(Math.random()*10))   //satta game 0 to 9

//15 to 25 random no
console.log(Math.floor(Math.random()*11) + 15 )      //total 11 no

//  console.log(Math.floor(Math.random()*(max - min + 1)) + min )





//  OTP Generate: 4 Digit:      1000-9999
console.log(Math.floor((Math.random()*(9999-1000 + 1))) + 1000)     //NOT SECURE
