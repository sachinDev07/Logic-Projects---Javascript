
let day = new Date();
console.log(day);
let t = day.getHours();
console.log(t);

let greeting = document.getElementById('greeting');
if(t >= 00 && t < 12) {
    let day = "Good Morning";
    greeting.innerHTML = day;  
}

if(t >= 12 && t < 16) {
    let day = "Good Afternoon";
    greeting.innerHTML = day;  
}

if(t >= 16 && t < 20) {
    let day = "Good Evening";
    greeting.innerHTML = day;  
}

if(t >= 20 && t < 00) {
    let day = "Good Night";
    greeting.innerHTML = day;  
}