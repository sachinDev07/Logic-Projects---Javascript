var timer;
var element = document.getElementById('timer');

(function () {
    var sec = 0;
    timer = setInterval(() => {
        element.innerHTML = `00:`+sec;
        sec++;
    },1000)
})()

function pause() {
    clearInterval(timer);
}
