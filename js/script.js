const basicEl = document.querySelector(".basic");
const professionalEl = document.querySelector(".professional");
const masterEl = document.querySelector(".master");

const switchBtn = document.querySelector(".toggle-input");
const switchBtnBox = document.querySelector(".pricing-description button");

switchBtn.addEventListener("change", (e) => {
  const inputTarget = e.target;
  switchCheckbox(inputTarget);
});

switchBtnBox.addEventListener("keyup", (e) => {
  if (
    e.key !== "Enter" &&
    e.code !== "Space" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight"
  )
    return;
  const inputTarget = e.target.querySelector(".toggle-input");
  if (e.key === "ArrowLeft" && inputTarget.value === "annually") return;
  if (e.key === "ArrowRight" && inputTarget.value === "monthly") return;

  inputTarget.checked = !inputTarget.checked;

  switchCheckbox(inputTarget);
});

function switchCheckbox(inputTarget) {
  if (inputTarget.value === "annually") {
    inputTarget.value = "monthly";
    basicEl.querySelector(".card-price").textContent = "19.99";
    professionalEl.querySelector(".card-price").textContent = "24.99";
    masterEl.querySelector(".card-price").textContent = "39.99";
  } else if (inputTarget.value === "monthly") {
    inputTarget.value = "annually";
    basicEl.querySelector(".card-price").textContent = "199.99";
    professionalEl.querySelector(".card-price").textContent = "249.99";
    masterEl.querySelector(".card-price").textContent = "399.99";
  }
}
