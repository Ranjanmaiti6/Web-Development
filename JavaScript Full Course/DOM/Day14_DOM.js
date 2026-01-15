const newElement = document.createElement("h2");
newElement.textContent = "Stick is comming";
newElement.id = "second";
console.log(newElement);

//select element
const element = document.getElementById("first");
element.after(newElement)
// element.before(newElement)


const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali aa rahi hai";
element.after(newElement2)
newElement2.id = "third";
// newElement2.className = "diwaliClass";
// newElement2.className += " holi";
newElement2.classList.add("Diwali");        //for give multiple class name
newElement2.classList.add("Holi");   
newElement2.classList.remove("Holi");   


//To give colour
newElement2.style.backgroundColor = "brown"
newElement2.style.fontSize = "25px"


element.before(newElement2)
console.log(newElement2)

//to know about attributes: id,class,style etc
console.log(newElement2.getAttribute("id"));    //third




//List
const list = document.createElement("li");
list.textContent = "Milk";
const list2 = document.createElement("li");
list2.textContent = "Rice";
const list3 = document.createElement("li");
list3.textContent = "Cake";
const list4 = document.createElement("li");
list4.textContent = "Paneer";
//select ul
const unorderedElement = document.getElementById("listing");
unorderedElement.append(list);
unorderedElement.append(list2);
unorderedElement.prepend(list3);
list.after(list4)   //at any postion if has access
//OR
console.log(unorderedElement.children[1].after(list4));



const arr = ["milk" , "choco" , "Roti" , "Rice" , "cake"];
const newUnordered = document.getElementById("lsiting");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderedElement.append(fragment);


const s1 = document.getElementById("first");
//s1.remove();



//Very dengerious innderHtml: can data loss
//assume as a html code not text
//list.innerHTML = "<h2>Hello</h2>"       //run as a code
list.textContent = "<h2>Hello</h2>"     //it fully text