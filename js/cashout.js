document.getElementById('btn-cash-out').addEventListener('click', function(event){
    // prevent page reload after submit
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);


    if(pinNumber == '1234'){
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        
        // add money to account
        
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

         // update the balance in the dom
         document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! please try again')
    }
        


})