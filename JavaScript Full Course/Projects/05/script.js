const div = document.querySelector('div');
setInterval(()=>{
    let time = new Date();
    //console.log(time.toLocaleTimeString());
    div.textContent = time.toLocaleTimeString();
},1000) //1000 in milisec update