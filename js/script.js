const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");

const starBtn = document.querySelector("#startBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let pause = false;

starBtn.addEventListener("click", startTimer);

function startTimer() {
    interval = setInterval(() => {
        if(!pause){
            milliseconds+=10;

            if(milliseconds === 1000){

                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);

        }
    },10);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function formatMilliseconds(time) {
        return time < 100 ? `${time}`.padStart(3,"0") : time;
    }
}