const range = document.querySelector("#range");
range.addEventListener("input", () => {
  const currentVal = range.value;
  range.style.backgroundSize = ((currentVal - range.min) / (range.max - range.min)) * 100 + "% 100%";
});
