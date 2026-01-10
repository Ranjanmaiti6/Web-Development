//String
const str1 = "Ranjan";
const str2 = 'Ranjan matii';
let day = 16
const str3 = `Ranjan maiti comming on ${day}`;        //best for string it can be multi line but others are only single line

console.log(str1, str2,str3)

const str4 = `Hello ranjan how are you ranjan`;
console.log(str4.length)
console.log(str4[0])
console.log(str4.toUpperCase())
const b = str4.toLocaleLowerCase()
console.log(b);
console.log(str4.indexOf('ranjan'))
console.log(str4.lastIndexOf('ranjan'))
console.log(str4.includes('ran'))   //cehck if present

//slice
console.log(str4.slice(2,6))
console.log(str4.slice(3))
console.log(str4.slice(-4)) //from last 
console.log(str4.substring(6,10))


const a = "Ranjan";
const c = "Maiti";
const d = a +" "+ c;
console.log(d);

console.log(a.replace("jan" , "Jon"))
console.log(a.replaceAll("jan" , "Jon"))
//Nothing change on original string


//IMP FOR DEV
const p = " Ranjan Maiti ";     //To remove unwanted spaces
console.log(p.trim())   //remove all spaces from start and end only
//  trimStart, trimEnd


const names = "Ranjan,Prahallad,Rina,Puja";
console.log(names.split(","))   //also store in array 









//TIMES:
const now = new Date();     //create a obj
console.log(now)         //show UTC Times which is 5 hr delay, usualy show in cricket match
//for real time
console.log(now.toString()) //real time
console.log(now.toISOString())
console.log(now.toLocaleString())

//Local time
console.log(now.getDay())
console.log(now.getDate())
console.log(now.getFullYear())
console.log(now.getMonth())     //moths start form 0


//Create date months 
const now1 = new Date(2025, 0, 12, 8,25,16,112 )        //days 1 but moths st form 0        //yr,mo,day,hr,min,se,milisec
console.log(now1)

//create method 3
const now2 = Date.now()
console.log(now2)       //print date in milisec     1768062289426
     

