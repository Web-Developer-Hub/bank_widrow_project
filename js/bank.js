// my deposit and total blance functioality here...
document.getElementById('dipositButton').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit_amount');
    const depositAmount = depositInput.value;
    if (depositAmount > 0) {
        const depositNumber = document.getElementById('deposit_number');
        const previousDipositAmount = depositNumber.innerText;
        const totalDiposit = parseFloat(previousDipositAmount) + parseFloat(depositAmount);
        depositNumber.innerText = totalDiposit;

        // my blance code here..
        const myBlance = document.getElementById('my_blance');
        const myBlanceValue = myBlance.innerText;
        totalMyBlance = parseFloat(myBlanceValue) + parseFloat(depositAmount);
        myBlance.innerText = totalMyBlance;
        depositInput.value = null;
    }
    else {
        depositInput.value = null;
    }
})


// withdraw functionality here...
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw_amount');
    const withdrawAmountValue = withdrawAmount.value;
    if (withdrawAmountValue > 0) {
        const withdrawBlance = document.getElementById('withdraw_blance');
        const previousWithdrawAmount = withdrawBlance.innerText;
        const totalWithdrawBlance = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmountValue);
        withdrawBlance.innerText = totalWithdrawBlance;
        
        //my blance code here withdraw....
        const myBlance = document.getElementById('my_blance');
        const myBlanceValue = myBlance.innerText;
        totalMyBlance = parseFloat(myBlanceValue) - parseFloat(withdrawAmountValue);
        myBlance.innerText = totalMyBlance;
        withdrawAmount.value = null;
    }
    else {
        withdrawAmount.value = null;
    }
})