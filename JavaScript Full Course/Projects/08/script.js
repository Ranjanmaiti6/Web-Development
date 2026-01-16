const body = document.querySelector('body');

body.addEventListener('click' , (e) => {
    console.log(e.clientX , e.clientY);

    const createElement = document.createElement('div');
    createElement.classList.add('circle');
    createElement.textContent = 'HI';

    const color =['red' , 'blue' , 'orange' , 'green' , 'pink' , 'purple'];
    createElement.style.backgroundColor =color[Math.floor(Math.random()*6)]

    createElement.style.top = `${e.clientY-25}px`;
    createElement.style.left = `${e.clientX-25}px`;

    //push to body end
    body.append(createElement);

    //remove after animation every div
    setTimeout(() => {
        createElement.remove();        
    }, 5000);   //every 5 sec

})

