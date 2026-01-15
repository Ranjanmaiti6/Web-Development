//function

function greeting(){
    console.log("Stick is comming");
}

greeting()

function addNo( a , b){
    console.log(a+b);
}

addNo(5,5);

function defaultAdd( a , b, c=0 , d=0){
    console.log(a+b+c+d);
}

defaultAdd(5,5,2);


//rest operator
function addition(...nums){ //creaters a type of array
    let sum = 0;
    for(let n of nums){
        sum += n;
    }
    return sum;
}

console.log(addition(2,3,4,5,7,8))

const arr = [12,23,34,53,64,65,76];
const [first , sec , ...nums] = arr
console.log(first,sec)
console.log(nums)



//  Function:   expression

const addNumber = function(nums1 , nums2){
    return nums1 + nums2;
}

console.log(addNumber(3,4))


//ARROW Function

const addItion = () => {
    console.log("Hello Ji")
}
addItion();

const substraction = (nums5 , nums6) => nums5-nums6;

console.log(substraction(4,2));



//array sorting
let brr = [10,8,32,6,44];
brr.sort((a,b) => a-b);
console.log(brr)


//squre
const squreNumber = (num) => num*num;
console.log(squreNumber(2))



//IIFE function: 
// (function greeting(){
//     console.log("Helloji");
// })();

//()()



//Function inside passes through function :: CALLSBACKS
function greet(){
    console.log("Hello Ji, Keise ho? ")
}
function dance(){
    console.log("I am dancing")
}
function mreet(CALLSBACKS){
    console.log("I am going to meet someone")
    CALLSBACKS()
    console.log("I am on my office")
}

mreet(greet);
mreet(dance);






function blinketOrderPlaced(){
    console.log("We have started packing your order")
}
function zomatoOrderPlaced(){
    console.log("We have started prepering your food")
}
function payment(amount , CALLSBACKS){
    console.log(`${amount} payment has initialized`)
    console.log("Payment is reseved")
    CALLSBACKS();

    //GST: Government
    //Rider payment
    //Company ka profit
}

payment(500 , zomatoOrderPlaced);
payment(500 , blinketOrderPlaced);