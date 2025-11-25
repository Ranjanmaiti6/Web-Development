let name = "Ranjan";        //can be change
let age = 19;
age = 18;
console.log(name , age);

const acc = 2000;   //cant change
console.log(acc);

//old method. can take same variable multi time
var a = 200;
var a = 250;
if(true){
    var b = 40; //can access outside scope
}
console.log(a , b);

//premative data type: number , string, bullion, undefined, null, bigint, symbol

//number
let aa = 30;
aa = 3.95;
console.log(a);

//string
let ch = "Ranjan";
let cz = 'Maiti';
console.log(ch,cz);

//bullion
let login = true;
let f = false;
console.log(login, f);

//undefined
let user;
console.log(user);

//bigint
let n = 2292929292929292383848485757840088778686n;  //bigint
console.log(n);

//null
let weather = null; //intentianny set for no value
console.log(weather);

//symbol
const id1 = Symbol("id");   //generate unique value. learn in future
console.log(id1);



//non premative data type: array, object, function

//array
let arr = [10,20,30,40 , "ranjan",true];
console.log(arr);

//object 
let obj = {
    name: "Rohit",
    accNo: 121231,
    age: 18,
    catagory: 'gen'
}
console.log(obj);

//function
function add(){
    console.log("Function calling...");
}
add();

//Type of Premitive Data type
console.log(typeof add);
console.log(typeof weather);        //bug in js. null type is called object

//Type of Nonpremitive Data type
console.log(typeof arr);    //array is object in js. even all non premitive is object type