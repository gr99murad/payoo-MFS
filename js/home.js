// add an event handler to the add money button inside form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after submit
    event.preventDefault();

    //  get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // verify pin number
    if(pinNumberInput == '1234'){
        console.log('added money to the account');

        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        
        // add money to account
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // update the balance in the dom
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to added money to the account! Please try to again');
    }



})