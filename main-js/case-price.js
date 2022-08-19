document.getElementById("case-plus").addEventListener("click", function () {
  const casePrice = casePriceValueSetValue("case-total-price", true);
  const subTotalAllValue = subTotalAll();
});
document.getElementById("case-minus").addEventListener("click", function () {
  const casePrice = casePriceValueSetValue("case-total-price", false);
  const subTotalAllValue = subTotalAll();
});
