// step-1
document.getElementById('deposit-button').addEventListener('click', function () {
    // step-2
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3
    depositField.value = '';

    // step-4
    const depositTotalElement = document.getElementById('updateByButton');
    const previourDepositTotalString = depositTotalElement.innerText;
    const previourDepositTotal = parseFloat(previourDepositTotalString);

    // step-5
    const newDeposit = previourDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDeposit;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previourBalanceTotalString = balanceTotalElement.innerText;
    const previourBalanceTotal = parseFloat(previourBalanceTotalString);

    // step-7
    const balanceTotal = previourBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = balanceTotal;
})