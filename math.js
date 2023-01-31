function add(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML=sum;
}
function divide(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1/num2;
}
function multiply(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1*num2;
}
//-------------------------------------------------------------------
let array = '12345';
document.write("<br><br>"+array+"<br>");
console.log(array+"\n");

let set = Array.from(array);
document.write(set+"<br>");
console.log(set+"\n");

for(let i=0; i<array.length; i++){
    document.write(i+"-"+array[i]+"<br>");
}

//------------------------------------------------------
let ok = document.getElementById("text").value;
let box = document.getElementById("box");
box.style.backgroundColor = ok;