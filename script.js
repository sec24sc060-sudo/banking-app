let balance = 0;
let transactions = [];

function deposit(){
    let amount = Number(document.getElementById("amount").value);
    if(amount <= 0){
        alert("Enter a valid amount");
        return;
    }
    balance += amount;
    transactions.push(`Deposited ₹${amount}`);
    document.getElementById("balance").innerText = balance;
    document.getElementById("amount").value = "";
}

function withdraw(){
    let amount = Number(document.getElementById("amount").value);
    if(amount <= 0){
        alert("Enter a valid amount");
        return;
    }
    if(amount > balance){
        alert("Insufficient Balance");
    } else {
        balance -= amount;
        transactions.push(`Withdrew ₹${amount}`);
        document.getElementById("balance").innerText = balance;
    }
    document.getElementById("amount").value = "";
}

function resetBalance(){
    balance = 0;
    transactions.push("Balance reset to ₹0");
    document.getElementById("balance").innerText = balance;
    document.getElementById("transactions").innerText = "";
}

function showTransactions(){
    if(transactions.length === 0){
        alert("No transactions yet");
        return;
    }
    document.getElementById("transactions").innerText = transactions.join("\n");
}
