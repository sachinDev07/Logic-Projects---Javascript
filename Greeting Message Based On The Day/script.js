
let day = new Date();
console.log(day);
let hrs = day.getHours();

let greet;

if(hrs >= 00 && hrs < 12) {
    greet = 'Good Morning';
}
else if (hrs <= 12 && hrs < 16) {
    greet = 'Good Agternoon';
}
else if ( hrs >= 16 && hrs < 20) {
    greet = 'Good Evening';
}
else {
    greet = "Good Night";
}

document.getElementById('greeting').innerHTML = greet;