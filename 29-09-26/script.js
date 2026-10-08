"use strict";
console.log("hi");
let cnt=-1;
function clickhandler(){
    if(++cnt%5==0){

        buttonObj.style.backgroundColor = "red";
    
    }else{
        buttonObj.style.backgroundColor = "blue";
       
    }
    
}
function clickhandler1(){
    if(++cnt%5==0){
        buttonObj1.style.backgroundColor = "red";
    }else{
        buttonObj1.style.backgroundColor = "blue";
    }
}
function clickhandler2(){
    if(++cnt%5==0){
        buttonObj2.style.backgroundColor = "red";
    }else{
        buttonObj2.style.backgroundColor = "blue";
    }
}
function clickhandler3(){
    if(++cnt%5==0){
        buttonObj3.style.backgroundColor = "red";
    }else{
        buttonObj3.style.backgroundColor = "blue";
    }
}
let buttonObj = document.querySelector(".btn");
let buttonObj1 = document.querySelector(".btn1");
let buttonObj2 = document.querySelector(".btn2");
let buttonObj3 = document.querySelector(".btn3");

console.log(buttonObj);
buttonObj.addEventListener("click", clickhandler);
buttonObj1.addEventListener("click", clickhandler1);
buttonObj2.addEventListener("click", clickhandler2);
buttonObj3.addEventListener("click", clickhandler3);
