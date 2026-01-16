const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const text = input.value.trim();    //trim space

    if(text == ""){
        return;
    }

    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = "50px";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginRight = "10px";
    deleteBtn.style.width = "80px";


    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Done";
    doneBtn.style.marginRight = "10px";
    doneBtn.style.width = "65px";

    parent.append(task , doneBtn , deleteBtn);
    allTask.append(parent);


    deleteBtn.addEventListener('click', () =>{
        parent.remove();
    })

    doneBtn.addEventListener('click' , ()=>{
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';
    })
    form.reset();
})