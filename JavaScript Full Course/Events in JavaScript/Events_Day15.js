    //          METHOD 1:
// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "You Just Clicked";
//     element.style.color = "Yellow";
// }

    //      METHOD 2:
const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent="Now Text Changed";
// }


    // METHOD 3:    THE BEST    
element.addEventListener('click' , () => {  //click and callback fn
    element.textContent = "I am the best";
})
element.addEventListener('dblclick' , () => {  //now can apply multiple event listner
    element.style.backgroundColor = "green";
})
//click or dblclick


const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");
const child3 = document.getElementById("child3");
const child4 = document.getElementById("child4");
const child5 = document.getElementById("child5");

child1.addEventListener('click' , ()=>{
    child1.textContent = "I am clicked";
})
child2.addEventListener('click' , ()=>{
    child2.textContent = "I am clicked";
})
child3.addEventListener('click' , ()=>{
    child3.textContent = "I am clicked";
})
child4.addEventListener('click' , ()=>{
    child4.textContent = "I am clicked";
})
child5.addEventListener('click' , ()=>{
    child5.textContent = "I am clicked";
})

//Easy Method by target
parent.addEventListener('click', (e)=>{
    e.target.textContent = "I Am Clicked By target";
})

const parent = document.getElementById("parent");
console.log(parent.children);

//add event listner by for of loop
for(let child of parent.children){
    child.addEventListener('click' , ()=>{
        child.textContent = "Clicked by For of Loop";
    })
}



//Easy Method by target
parent.addEventListener('click', (e)=>{
    e.target.textContent = "I Am Clicked By target";
})


//BUBBLING: For use very big no of event listner, Optimized approch
const grandParent = document.getElementById("grandParent");
grandParent.addEventListener('click' , ()=>{
    console.log("Grand Parent is clicked");
},false)

const Parent = document.getElementById("Parent");
Parent.addEventListener('click' , ()=>{
    console.log("Parent is clicked");
},false)

const child = document.getElementById("child");
child.addEventListener('click' , ()=>{
    console.log("child is clicked");
},fasle)    //by default is false then first child parent granddparent if child clicked if all true then reversed

//capture phase on: top se down usi time pe event trigger on ho jayega
//capture phase off: Event down to up (Bubbleing phase) mai tab trigger hoga

//capture up to down, bubble down to up