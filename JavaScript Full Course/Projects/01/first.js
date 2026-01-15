const quotes = [
    "Start now, not someday.",
    "Progress beats perfection.",
    "Dream big. Start small.",
    "Consistency creates success.",
    "Believe. Work. Achieve.",
    "Discipline equals freedom.",
    "Make today count.",
    "Focus. Execute. Repeat.",
    "Small steps matter.",
    "You are getting better.",
    "Action cures fear.",
    "Stay hungry. Stay driven.",
    "Hard work compounds.",
    "Done is better than perfect.",
    "Learn. Build. Improve.",
    "Trust the process.",
    "One day or day one.",
    "Growth begins with effort.",
    "Keep going.",
    "Win the day."
]
//quaryselector select first only
const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click' , ()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})