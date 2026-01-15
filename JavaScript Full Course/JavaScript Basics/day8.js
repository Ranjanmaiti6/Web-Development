//OBJECTS:
//  key value pair

const user = {
    name : "Ranjan",
    age : 20,
    email : "Ranjanmaiti.tech@gmail.com",
    amount : 2000
}

console.log(user)
console.log(user.email)
//metohd 2
console.log(user["name"])

user.mobile = 8250255505;   //push new value
console.log(user)


//delete 
delete user.age
console.log(user)


//  IMPORTANT:  

//for print keys
console.log(Object.keys(user))
//for print values
console.log(Object.values(user))
//for boths
console.log(Object.entries(user))



for(let keys in user){   //for in loop
    console.log(keys , user[keys]);
}


//Object destructureing...
const {name , amount} = user;
console.log(name,amount)

const arrr = [10,20,40,30]
const [first , secound] = arrr;
console.log(secound);

//for of loop array ke liye
for(let keyy of Object.keys(user)){
    console.log(keyy)
}

for(let val of Object.entries(user)){
    console.log(val)
}





//CREATING FUNCTINO IN JS
const user2 = {
    name : "ranjan maiti",
    age : 19,
    greeting : function(){
        // console.log("Ranjan Is Comming...");
        console.log(`Ranjan Is Comming... ${this.name}`);
        return 20;
    }
}


user2.greeting();
const va = user2.greeting();        //resive return value
console.log(va)



const user3 = {
    name : "Ranjan",
    age : 20,
    address : {
        city : "Purba Medinipur",
        state : "WB",
    }
}

console.log(user3.address.state)


const user4 = {
    name : "Ranjan",
    age : 20,
    0 : 100,
    2 : "maiti"
}
console.log(user4[0])