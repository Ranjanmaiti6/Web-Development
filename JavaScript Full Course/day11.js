//  Scope And Closer ,  High Order Function(HOF)
//  Global -> access everywhere, Functional -> only inside functino , BlockLevel scope -> only inside the block


let a = 10;
let b = 20;


function createCounter(){

    function increment(){
        console.log("I am incriment Funciton")
    }

    return increment;
}

const count = createCounter();  //fn reference copy 
console.log(count)
count()




function createCount(){
    let count = 0;  //its stack but not delete after first call.  //if anything point to fn then not delete after excution even if stack
    function increment(){   //becoz fn links with count so it transfer to heap for future use and delete from stack
        count++;
        return count;
    }


    return increment;
}
const val = createCount();
console.log(val());
console.log(val());
console.log(val());





let user = {
    balance : 500,
    deposit : function(amount){
        if(typeof amount === "number" && amount>0){
            this.balance += amount;
            return this.balance;
        }
    },
    withdraw : function(amount){
        if(typeof amount === "number" && amount>0 && this.balance>=amount){
            this.balance -= amount;
            return this.balance;
        }
    },
    getBalence : function(){
        return this.balance;
    }
}

console.log(user.deposit(500))

user.balance = "Ranjan";    //anyone can change balence from outside so we use funciton below
console.log(user.getBalence())




function createBackAccount(){
    let balance = 500;      //now make private
    const user = {      //we can direct return here without create user 
        deposit : function(amount){
            if(typeof amount === "number" && amount>0){
                balance += amount;
                return balance;
            }
        },
        withdraw : function(amount){
            if(typeof amount === "number" && amount>0 && balance>=amount){
                balance -= amount;
                return balance;
            }
        },
        getBalence : function(){
            return balance;
        }
    }
    return user;
}

const customer = createBackAccount();
console.log(customer.deposit(300))










//Higher Order Function     :       Function return a function
function double(){
    function execute(){
        console.log("Hello");
    }
    return execute;
}

const n = double();
n();

function triple(value){
    return function execute(nums){      //direct return 
        return nums*value;
    }
}
const m = triple(20);
console.log(m(5))
//      OR
const p = triple(20)(10);       //triple(20) call and pass execute fun(10) then => ans
console.log(p)