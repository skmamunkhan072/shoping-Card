function getValueSetValue(getIdValue, isIncresDecris) {
  const phoneInput = document.getElementById(getIdValue);
  const phoneValueString = phoneInput.value;
  const phoneValue = parseInt(phoneValueString);
  if (isIncresDecris === true) {
    phoneInput.value = phoneValue + 1;
    return phoneInput;
  } else {
    if (phoneValueString > 1) {
      phoneInput.value = phoneValue - 1;
      return phoneInput;
    } else {
      return 0;
    }
  }

  return phoneValue;
}
function phonePriceValueSetValue(getId, bulianValue) {
  const inputFildValue = getValueSetValue("phone-input", bulianValue);
  if (inputFildValue === 0) {
    return 0;
  } else {
    const phonePriceElement = document.getElementById(getId);
    const phonePriceValue = inputFildValue.value * 1200;
    phonePriceElement.innerText = phonePriceValue;
    return phonePriceValue;
  }
}
function casePriceValueSetValue(getId, bulianValue) {
  const inputFildValue = getValueSetValue("case-Input-fild", bulianValue);
  if (inputFildValue === 0) {
    return 0;
  } else {
    const phonePriceElement = document.getElementById(getId);
    const phonePriceValue = inputFildValue.value * 59;
    phonePriceElement.innerText = phonePriceValue;
    return phonePriceValue;
  }
}
function getTotlValue(getId) {
  const getElement = document.getElementById(getId);
  const getValue = parseInt(getElement.innerText);
  return getValue;
}
function sumTotalSetValue(phoneTotal, caseTotal, allTotal) {
  const subTotal = phoneTotal + caseTotal;
  const getTotalElement = document.getElementById(allTotal);
  getTotalElement.innerText = subTotal;
  return subTotal;
}
function subTotalAll() {
  const phoneTotal = getTotlValue("phone-price");
  const caseTotal = getTotlValue("case-total-price");
  const subTotalValue = sumTotalSetValue(phoneTotal, caseTotal, "sub-total");
  const taxValue = subTotalValue * 0.1;
  const taxTotalValuestring = taxValue.toFixed(2);
  const taxTotalValue = parseFloat(taxTotalValuestring);
  const taxElement = document.getElementById("tax");
  taxElement.innerText = taxTotalValue;
  const getAllSumElement = document.getElementById("all-total");
  console.log(typeof subTotalValue, typeof taxTotalValue);
  const allTotalSum = subTotalValue + taxTotalValue;
  getAllSumElement.innerText = allTotalSum;
}
