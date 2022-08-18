// step-1
document.getElementById('withdraw-button').addEventListener('click', function () {
    // step-2
    const withdrawfield = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawfield.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawfield.value = '';

    // step-4
    const withdrawTottalElement = document.getElementById('updateFromButton');
    const previousWithdrawTotalString = withdrawTottalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5
    const withdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTottalElement.innerText = withdrawTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previourBalanceTotalString = balanceTotalElement.innerText;
    const previourBalanceTotal = parseFloat(previourBalanceTotalString);

    // step-7
    const currentBalance = previourBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalance;

})