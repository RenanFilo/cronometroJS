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
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

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

    starBtn.style.display = "none";
    pauseBtn.style.display = "block";
    resetBtn.style.display = "block";
   
}

function resumeTimer (){
    pause = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function pauseTimer (){
    pause = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3,"0") : time;
}

function resetTimer(){
    clearInterval(interval);

    pause = false;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    starBtn.style.display = "block";
    resetBtn.style.display = "none";
    resumeBtn.style.display = "none";
    pauseBtn.style.display ="none";
}