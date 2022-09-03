document.getElementById('submit').addEventListener('click', heightConvertor);

function heightConvertor() {
    var feet = parseInt(document.getElementById('feet').value * 12);
    var inches = parseInt(document.getElementById('inches').value);

    var cm = (feet + inches) * 2.54;

    document.getElementById('result').innerHTML = cm.toFixed(0)+"cm";
}