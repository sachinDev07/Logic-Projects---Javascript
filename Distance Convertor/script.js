
const convertEl = document.querySelector('.btn');

convertEl.addEventListener('click', function() {
    let valueEl = document.getElementById('input').value;
    console.log(valueEl);
    document.getElementById('output').value = Math.round(valueEl * 1.6) + " kilometers";
});