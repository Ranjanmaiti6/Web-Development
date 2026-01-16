const form = document.querySelector('form');
const ans = {
    q1: "Paris",
    q2: "Mars",
    q3: "William Shakespeare",
    q4: "Pacific Ocean",
    q5: "Oxygen",
    q6: "7",
    q7: "Cheetah",
    q8: "China",
    q9: "Carbon Dioxide",
    q10: "Thermometer"
}

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;
    for(let [name, value] of data.entries()){
        if(ans[name] == value){
            finalScore++;
        }
    }
})