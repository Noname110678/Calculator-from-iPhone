"use strict"

let allBtns = document.querySelectorAll(".number")
let inputlol = document.querySelector('.userNum')
let clear = document.querySelector('.clear')    
let equal = document.querySelector('.equal')

allBtns.forEach(btn => {
    btn.addEventListener('click',function(){
        if (btn.value === "+/-") inputlol.value = inputlol.value * -1; return;
        inputlol.value = inputlol.value + btn.value
        return;
    });
});

equal.addEventListener('click',function(){
    inputlol.value = eval(inputlol.value)
})

clear.addEventListener('click',function(){
    inputlol.value = ""
})
