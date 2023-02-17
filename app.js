(function () {
  const incomeInputField = document.querySelector("#income");
  const foodInputField = document.querySelector("#food");
  const rentInputField = document.querySelector("#rent");
  const clothsInputField = document.querySelector("#cloths");
  const saveInputField = document.querySelector("#save");

  const totalExpensesEle = document.querySelector("#total-expenses");
  const balanceEle = document.querySelector("#balance");
  const savingAmountEle = document.querySelector("#saving-amount");
  const remainingBalanceEle = document.querySelector("#remaining-balance");

  let totalExpenses;
  let balance;
  let savingAmount;
  let remainingBalance;

  document.querySelector("#calculate").addEventListener("click", function () {
    if (
      isPositive(incomeInputField) &&
      isPositive(foodInputField) &&
      isPositive(rentInputField) &&
      isPositive(clothsInputField)
    ) {
      totalExpenses =
        toFloat(foodInputField) +
        toFloat(rentInputField) +
        toFloat(clothsInputField);
      balance = toFloat(incomeInputField) - totalExpenses;

      totalExpensesEle.innerText = totalExpenses;
      balanceEle.innerText = balance;
    } else {
      alert("Input has to be positive number");
    }
    savingAmountEle.innerText = "00";
    remainingBalanceEle.innerText = "00";
  });

  document.querySelector("#saveBtn").addEventListener("click", function () {
    saveInputField.value = toFloat(saveInputField);
    if (isPositive(saveInputField)) {
      savingAmount =
        (toFloat(saveInputField) / 100) * toFloat(incomeInputField);
      if (balance - savingAmount >= 0) {
        remainingBalance = balance - savingAmount;
        savingAmountEle.innerText = savingAmount;
        remainingBalanceEle.innerText = remainingBalance;
      } else {
        alert("You can not save more than your balance!");
      }
    } else {
      alert("Input has to be positive number");
    }
  });
})();
