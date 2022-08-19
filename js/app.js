function genaratePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getPin() {
  const pin = genaratePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
document.getElementById("btn-genarate").addEventListener("click", function () {
  const pin = getPin();
  const genarateInputValue = document.getElementById("genarate-input");
  genarateInputValue.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const value = event.target.innerText;
    const typedInputValue = document.getElementById("typed-pin-input");
    const previousInputValue = typedInputValue.value;
    if (isNaN(value)) {
      if (value === "C") {
        typedInputValue.value = "";
      } else if (value === "<") {
        const digits = previousInputValue.split("");
        digits.pop();
        const newDigits = digits.join("");
        typedInputValue.value = newDigits;
      }
    } else {
      const newTypedInputValue = previousInputValue + value;
      typedInputValue.value = newTypedInputValue;
    }
  });

document.getElementById("btn-submit").addEventListener("click", function () {
  const genarateInputValue = document.getElementById("genarate-input");
  const genarateInputPinValue = genarateInputValue.value;

  const typedInputValueField = document.getElementById("typed-pin-input");
  const typedInputValue = typedInputValueField.value;

  const successMessage = document.getElementById("success-message");

  const failurMessage = document.getElementById("failur-message");

  if (genarateInputPinValue === typedInputValue) {
    successMessage.style.display = "block";
    failurMessage.style.display = "none";
  } else {
    failurMessage.style.display = "block";
    successMessage.style.display = "none";
  }
});
