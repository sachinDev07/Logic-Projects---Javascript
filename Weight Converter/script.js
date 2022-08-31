let kgbtn = document.getElementById("kg");
let poundBtn = document.getElementById("pound");

kgbtn.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 2.205 + " kg";
});


poundBtn.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 2.205 + " Pound";
});