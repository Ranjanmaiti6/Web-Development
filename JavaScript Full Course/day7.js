//ARRAY
let marks = [10,20,30,40,50,"Ranjan"];

console.log(marks)
console.log(marks.length)
marks[0] = 30;
console.log(marks)

marks.push("Maiti")
console.log(marks)
marks.pop()

marks.unshift(90);  //push at start         //but it is unefficent practice
marks.shift()   //delete first
console.log(marks)


for(let i =0; i<marks.length; i++){
    console.log(marks[i])
}
for(let i of marks){
    console.log(i)
}



let arr = [10,12,13,14];
let arr2 = arr;
arr2.push(40);
console.log(arr)        //also change in main arr   because here coppy by reference



const arr4 = [10,12,13,14];
console.log(arr4.slice(1,3))

//  SLICE CREATE A NEW ARRAY AFTER TRIME     
//  SPLICE DELETE ON ORGINAL ARRAY TRIME




const brr = [12,1212,2121,4242,5353];
const brr2 = ["ranjan" , 343, true]
const brr4 = [44,446]

const brr3 = brr.concat(brr2,brr4)
console.log(brr3)


//  SPREAD OPERATOR:    
const arr5 = [...arr,...arr2,...arr4]
console.log(arr5)

const names = ["Ranjan","Prahallad","Rina","Puja"]
console.log(names.toString())
console.log(names.join("_"))

names.sort();
console.log(names)
//names.reverse()


const aa = [10,6,22,18,15];
aa.sort();
console.log(aa) //not real short It short acording to ascai value not value


const crr = [10,12,13,[23,34,45],67,89];
console.log(crr[3][1])

console.log(crr.flat())