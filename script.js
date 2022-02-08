"use strict";

let counter;

window.onload = () =>{
    counter = [0];
    console.log(counter);
    nextStep();
}

function nextStep(){
    counter.unshift(counter[0] + 1);
    if (counter.length >= 10){
        counter.pop();
    }
    console.log(counter);
    setTimeout(nextStep, 1000);
}