//1. Create a loop that will increment each pair of numbers by 1
//2. Set a limit for each pair at 59, except hours
//3. Make sure that when the minutes or seconds reach 59 they add increment the next pair by 1
//5. Style everything
//6. Add to github

let second = 0;
let minute = 0;
let hour = 0;

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let secondsElement = document.getElementById('sec');
let minutesElement = document.getElementById('min');




startBtn.addEventListener('click', function(){
    start();
});

stopBtn.addEventListener('click', function(){
    stop();
});

resetBtn.addEventListener('click', function(){
    window.location.reload();
});



let intervalID = null;

let limit = 5;

function start() {
    intervalId = setInterval(() => {
        if (second >= limit) {
            minute++
            second = 0;
        } else {
            second++;
        }


        if (minute >= limit) {
            hour++
            minute = 0;
        } 

        console.log(second)
        secondsElement.innerText = second;
        minutesElement.innerText = minute;
    }, 1000);
}
  

function stop() {
    clearInterval(intervalId);
}

