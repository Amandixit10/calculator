const display1El=document.querySelector('.display-1');
const display2El=document.querySelector('.display-2');
const tempResultEl=document.querySelector('.temp-result');
const number=document.querySelectorAll('.number')
const operationEl=document.querySelectorAll('.operation');
const equalEl=document.querySelector('.equal');
const clearEl=document.querySelector('.all-clear');
const clearLastEl=document.querySelector('.last-entity-clear');

let dis1Num='';
let dis2Num='';
let result=null;
let lastOperation='';
let haveDot=false;