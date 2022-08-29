var feetEl = document.getElementById("feet");
var inchEl = document.getElementById("inch");

feetEl.addEventListener("input", function() {
    let f = this.value;
    let i = f * 12;
    inch.value = i;
});

inchEl.addEventListener("input", function() {
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)) {
        f = f.toFixed(2);
    };
    feet.value = f;
});