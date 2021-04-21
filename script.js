"use strict"

let allBtns = document.querySelectorAll(".number")
let inputlol = document.querySelector('.userNum')
let clear = document.querySelector('.clear')    
let equal = document.querySelector('.equal')

allBtns.forEach(btn => {
    btn.addEventListener('click',function(){
        inputlol.value = inputlol.value + btn.value
    });
});

equal.addEventListener('click',function(){
    inputlol.value = eval(inputlol.value)
})

clear.addEventListener('click',function(){
    inputlol.value = ""
})
