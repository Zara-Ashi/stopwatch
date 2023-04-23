const minutes = document.getElementById ("minutes")
const seconds = document.getElementById ("seconds")
const miliseconds = document.getElementById ("miliseconds")
const start = document.getElementById ("start") //set intervalid запускает
const stop = document.getElementById ("stop")
const reset = document.getElementById ("reset")

let intervalId;
let milisec = 0;
let sec = 0;
let min = 0;


const startTimer = () => {
    milisec++;   
    console.log(1)
    if(sec === 59 && milisec === 99){
        min++;
        sec = 0;
        milisec = 0;
    } else if (milisec === 99){
        sec++;
        milisec = 0;
    }
setNumbersToTimer(min,sec,milisec);
}

const setNumbersToTimer=(min, sec, milisec)=>{
     minutes.textContent = makeDoubleDigit(min)
seconds.textContent = makeDoubleDigit(sec)
miliseconds.textContent = makeDoubleDigit(milisec)
}


const makeDoubleDigit = (num) => {
    return num < 10 ? "0" + num : num;
 
}


const handleStart = () => {
    intervalId= setInterval(startTimer, 10)
}
const handleStop =()=>{
    clearInterval(intervalId)
}
const handleReset=()=>{
    clearInterval(intervalId)
    setNumbersToTimer(0,0,0)
}


start.addEventListener ("click", handleStart)
stop.addEventListener ("click", handleStop)
reset.addEventListener ("click", handleReset)