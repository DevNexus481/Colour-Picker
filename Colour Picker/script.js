document.getElementById("color-picker").addEventListener("input", function () {
  const selectedColor = this.value;
  document.getElementById("selected-color").textContent = selectedColor;
  document.getElementById("color-code-input").value = selectedColor;
});

document
  .getElementById("color-code-input")
  .addEventListener("input", function () {
    const colorCode = this.value;
    if (/^#[0-9A-F]{6}$/i.test(colorCode)) {
      document.getElementById("selected-color").textContent = colorCode;
      document.getElementById("color-picker").value = colorCode;
    }
  });

document.getElementById("copy-button").addEventListener("click", function () {
  const colorCode = document.getElementById("selected-color").textContent;
  navigator.clipboard
    .writeText(colorCode)
    .then(() => {
      alert("Color code copied to clipboard: " + colorCode);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
});
