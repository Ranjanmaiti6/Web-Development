
setInterval(() => {
    const result = document.getElementById('result');
    const currentTime = Date.now();     //inmilisec strt from 1st jan 1970
    const OlympicTime = new Date(2028,6,14).getTime();
    //Olympic start date 14jul2028
    let timer = OlympicTime - currentTime;

    //milisec
    const day = Math.floor((timer)/(1000*60*60*24));    //timer dev 1 day
    timer = timer % (1000*60*60*24) //remening milisec
    const hour = Math.floor((timer)/(1000*60*60));  //hour
    timer = timer % (1000*60*60)    //remening milisec
    const min = Math.floor((timer)/(1000*60));  //min
    timer = timer % (1000*60)   //remening milisec
    const sec = Math.floor((timer)/(1000)); //sec

    result.textContent = `${day} Days : ${hour} Hours : ${min} Minutes : ${sec} Secounds`;    
}, 1000);