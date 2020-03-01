let timing = false;
let interval;
let time = 0;
const count = document.getElementById("time");
let i = 0;
const format = {
    min: 0,
    sec: 0,
    milli: 0
};

function startStop(){
    if(!timing) {
        interval = setInterval(function () {
            time += 0.01;
            count.innerHTML = time.toFixed(2).toString();
        }, 10);
        timing = true;
    } else {
        clearInterval(interval);
        timing = false;
    }
}

function reset(){
    clearInterval(interval);
    time = 0;
    count.innerHTML = "0";
    timing = false;
}

document.addEventListener('keydown',function(event){
    i = i+1;
    console.log(event.code, event.keyCode)
    if(event.keyCode === 32 || event.code === 'Space'){
        startStop();
        if(i % 2 == 0){
            format.min = Math.floor(Math.floor(Number.parseFloat(time.toFixed(2)))/60);
            format.sec = Math.floor(Number.parseFloat(time.toFixed(2)))%60;
            format.milli =  (time.toFixed(2) + "").split(".")[1];

            document.getElementById("format").innerHTML = format.min + " : " + format.sec + " : " + format.milli;
        }
    }
    else if(event.keyCode === 46 || event.code === 'Delete' || event.keyCode === 8 || event.code === 'Backspace'){
        i = 0;
        document.getElementById("format").innerHTML = 0 + " : " + 0 + " : " + 0;
        reset();
    }
});


