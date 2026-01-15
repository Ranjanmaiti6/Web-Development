//  Foreach , filter , reducer , map , set

const arr = [10,20,30,5,87,90]

arr.forEach((number, index , arr) => {       //For Each
    console.log(number,index , arr);        //First is mandatarty last two optional 
})

//sum of array
let sum = 0;
arr.forEach((Num)=>{
    sum = sum+Num;
})
console.log(sum);



//Filter
const brr = [10,20,30,5,87,90]  
const newArray = brr.filter((number)=>number>25);    //return new array Filtered        //condition true takes inside newArray
console.log(newArray)

//Try to make filter by own 
brr.filtering = function(compair){  
    const ans = [];
    for(let num of this){       //this point to that brr
        if(compair(num) ){
            ans.push(num);
        }
    }
    return ans;
}

const newMod = brr.filtering((num)=>num>25);
console.log(newMod)



//Map
const crr = [44,55,66,77,88];
const newCrr = crr.map((num)=>num*2);
console.log(newCrr)



const products = [
    //Electronics
    {id: 1, name : "Laptop", catagoty : "Electronics", pirce : 1200 , inStock : true},
    {id: 2, name : "Monitor", catagoty : "Electronics", pirce : 1100 , inStock : false},
    {id: 3, name : "TV", catagoty : "Electronics", pirce : 1203 , inStock : true},
    {id: 4, name : "Phone", catagoty : "Electronics", pirce : 2200 , inStock : true},

    //books
    {id: 5, name : "Atomic", catagoty : "Books", pirce : 100 , inStock : true},
    {id: 6, name : "History", catagoty : "Books", pirce : 50 , inStock : false},
    {id: 7, name : "Physics", catagoty : "Books", pirce : 100 , inStock : true}
];

//Redece
//Assume:  accumulator = sum = 0
const totalPrice = products.reduce((accumulator , currentValue) => {        //used for cart in toal price
    if(currentValue.inStock)
        return accumulator + currentValue.pirce;
    else
        return accumulator;
},0);
console.log(totalPrice);



//Data Structure: Set
const prr = [10,10,30,40,10,60];        
console.log(arr);

const s1 = new Set(arr);        //only unique value 
console.log(s1);
s1.add(11);
console.log(s1)
console.log(s1.has(10))
s1.delete(11);
console.log(s1.size);
s1.clear();


const email = ["ro@gm" , "ra@gm" , "mo@gm" , "ro@gm"];      //remove duplicate

const s2 = new Set(email);
console.log(s2);



//MAP:
const m1 = new Map([
    ["Ranjan" , 40],        //key value
    [2 , "Ranjan"],
    [true , 11],
    [ [10,30,11] , "Ranjan"]
]);

console.log(m1);

m1.set({name : "Ranjan" , age : 19} , true);
console.log(m1);
//m1.size

for(let [keys,value] of m1){
    console.log(keys,value);
}