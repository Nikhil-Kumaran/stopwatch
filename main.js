var timing = false;
var interval;
var time = 0;
var count = document.getElementById("time");
var i = 0;
var format = {
    min : 0,
    sec : 0,
    milli: 0
};
// var s = document.getElementById("s");
// var r = document.getElementById("r");
// var t = document.getElementById("t");
// var past = document.getElementById("past");


function startstop(){
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
    //past.innerHTML = "";
}

// function record(){
//     var node = document.createElement("li");
//     var textnode=document.createTextNode(count.innerHTML);
//     node.appendChild(textnode);
//     past.appendChild(node);
// }

// s.addEventListener("click",startstop);//not s.addEventListener("click",startstop());
// r.addEventListener("click",reset);
// t.addEventListener("click",record);

document.addEventListener('keydown',function(event){
    i = i+1;
    if(event.keyCode === 32){
        
        startstop();
        if(i % 2 == 0){
            format.min = Math.floor(Math.floor(time.toFixed(2))/60);
            format.sec = Math.floor(time.toFixed(2))%60;
            format.milli =  (time.toFixed(2) + "").split(".")[1];
            console.log(Math.floor(Math.floor(time.toFixed(2))/60)+" "+Math.floor(time.toFixed(2))%60+" "+ format.milli);
            
            document.getElementById("format").innerHTML = format.min + " : " + format.sec + " : " + format.milli;
        }
    }
    else if(event.keyCode === 46){
        i = 0;
        document.getElementById("format").innerHTML = 0 + " : " + 0 + " : " + 0;
        reset();
    }
});


