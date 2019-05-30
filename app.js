let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");
let btn5 = document.getElementById("button5");
let btn6 = document.getElementById("button6");
let btn7 = document.getElementById("button7");
let btn8 = document.getElementById("button8");
let btn9 = document.getElementById("button9");

function clockwiseRotation(){
  [btn1.innerHTML,
  btn2.innerHTML,
  btn3.innerHTML,
  btn4.innerHTML,
  btn6.innerHTML,
  btn7.innerHTML,
  btn8.innerHTML,
  btn9.innerHTML]=
    [btn4.innerHTML,
    btn1.innerHTML,
    btn2.innerHTML,
    btn7.innerHTML,
    btn3.innerHTML,
    btn8.innerHTML,
    btn9.innerHTML,
    btn6.innerHTML]
  
}


btn5.addEventListener("click", clockwiseRotation)

function antiClockwiseRotation(){
  [btn1.innerHTML,
  btn2.innerHTML,
  btn3.innerHTML,
  btn4.innerHTML,
  btn6.innerHTML,
  btn7.innerHTML,
  btn8.innerHTML,
  btn9.innerHTML]=
    [btn2.innerHTML,
    btn3.innerHTML,
    btn6.innerHTML,
    btn1.innerHTML,
    btn9.innerHTML,
    btn4.innerHTML,
    btn7.innerHTML,
    btn8.innerHTML]
  }
  btn1.addEventListener("click", antiClockwiseRotation)
  btn2.addEventListener("click", antiClockwiseRotation)
  btn3.addEventListener("click", antiClockwiseRotation)
  btn4.addEventListener("click", antiClockwiseRotation)
  btn6.addEventListener("click", antiClockwiseRotation)
  btn7.addEventListener("click", antiClockwiseRotation)
  btn8.addEventListener("click", antiClockwiseRotation)
  btn9.addEventListener("click", antiClockwiseRotation)
