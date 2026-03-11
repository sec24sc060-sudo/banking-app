let balance = 0;

function deposit(){

let amount = document.getElementById("amount").value;

balance = balance + Number(amount);

document.getElementById("balance").innerText = balance;

}

function withdraw(){

let amount = document.getElementById("amount").value;

if(amount > balance){

alert("Insufficient Balance");

}

else{

balance = balance - Number(amount);

document.getElementById("balance").innerText = balance;

}

}