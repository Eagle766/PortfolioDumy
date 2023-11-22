/* Nav */

let btn=document.querySelector('#btn1');

let btn1=document.querySelector('#btn2');

function btnevent(){
    btn.style.color="#ff004f";
    btn.style.background="white";
    btn.style.cursor="pointer";
}

function btn_mouseout(){

    btn.style.color="white";
    btn.style.background="#ff004f";
}

function btnevent2(){
    btn1.style.color="#ff004f";
    btn1.style.background="white";
    btn1.style.cursor="pointer";
}

function btn_mouseout2(){
    btn1.style.color="white";
    btn1.style.background="#ff004f";
}
btn.addEventListener('mouseover',btnevent);
btn.addEventListener('mouseout',btn_mouseout);

btn1.addEventListener('mouseover',btnevent2);
btn1.addEventListener('mouseout',btn_mouseout2);


