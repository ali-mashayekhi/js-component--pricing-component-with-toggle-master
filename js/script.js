const basicEl = document.querySelector(".basic");
const professionalEl = document.querySelector(".professional");
const masterEl = document.querySelector(".master");

const switchBtn = document.querySelector(".toggle-input");

switchBtn.addEventListener("change", (e) => {
  if (e.target.value === "annually") {
    e.target.value = "monthly";

    basicEl.querySelector(".card-price").textContent = "19.99";
    professionalEl.querySelector(".card-price").textContent = "24.99";
    masterEl.querySelector(".card-price").textContent = "39.99";
  } else if (e.target.value === "monthly") {
    e.target.value = "annually";

    basicEl.querySelector(".card-price").textContent = "199.99";
    professionalEl.querySelector(".card-price").textContent = "249.99";
    masterEl.querySelector(".card-price").textContent = "399.99";
  }
});
