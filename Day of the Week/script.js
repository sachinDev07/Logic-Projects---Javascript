let weekName = document.getElementById('week_name');
let date = document.getElementById('time');
let quote = document.getElementById('qoute');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleDateString();

switch(day) {
    case 0: 
        nameOfDay = 'Sunday';
        quoteOfDay = 'Time to chillax!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quoteOfDay = 'Monday morning blues!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quoteOfDay = 'Taco Time!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quoteOfDay = 'Two more days to the weekend.';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quoteOfDay = 'The weekend is almost here...';
        break;
    case 5:
        nameOfDay = 'Friday';
        quoteOfDay = 'Weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quoteOfDay = 'Time to party!';
        break;
}

weekName.innerHTML = nameOfDay;
date.innerHTML = ndate;
quote.innerHTML = quoteOfDay;