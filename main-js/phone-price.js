document.getElementById("phone-plus").addEventListener("click", function () {
  const phonePrice = phonePriceValueSetValue("phone-price", true);
  const subTotalAllValue = subTotalAll();
});
document.getElementById("phone-minus").addEventListener("click", function () {
  const phonePrice = phonePriceValueSetValue("phone-price", false);

  const subTotalAllValue = subTotalAll();
});
