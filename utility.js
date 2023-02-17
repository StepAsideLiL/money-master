function isPositive(dom) {
  return dom.value >= 0;
}

function toFloat(dom) {
  if (dom.value === "") {
    return 0;
  }
  return parseFloat(dom.value);
}
