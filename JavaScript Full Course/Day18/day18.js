//Zomato Application

orderDetails = {
    orderId : 123123,
    food : ["Pizza" , "Biriyani" , "Coke"],
    cost : 620,
    customer_name : "Ranjan",
    customer_location : "delhi",
    resturent_location : "Noida"
}
function placedOrder(orderDetails , CallBack){
    console.log(`${orderDetails.cost} Payment in Progress...`);

    //we assume after 3 sec the payment is confarmed
    setTimeout(()=>{
        console.log("Payment is reseved. Order Placed")
        orderDetails.status = true;
        CallBack(orderDetails)
    },3000)
}

function preperingOrder(orderDetails , CallBack){
    console.log(`Your food Prepration is started of ${orderDetails.food}`);

    //assume after 3 sec food is ready
    setTimeout(() => {
        console.log("Food is ready now");
        orderDetails.token = 1234;
        CallBack(orderDetails)
    }, 3000);
}

function pickUp(orderDetails , CallBack){
    console.log(`Delevery Boy is on the way to pick your order form ${orderDetails.resturent_location} `);

    setTimeout(() => {
        console.log("I have picked up your order");
        orderDetails.received = true;
        CallBack(orderDetails)
    }, 3000);

}

function deleverOrder(orderDetails){
    console.log(`I am on the way to delever your order ${orderDetails.customer_location} `);

    setTimeout(() => {
        console.log("Order delevered succesfully");
        orderDetails.delevery = true;
    }, 3000);
}
//placedOrder(preperingOrder)

placedOrder(orderDetails , (orderDetails)=>{   //callback HELL this is called : callback inside callback
    preperingOrder(orderDetails,(orderDetails) =>{
        pickUp(orderDetails ,(orderDetails)=>{
            deleverOrder(orderDetails);
        });
    });
})