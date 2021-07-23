const form = document.getElementById("form");

const date = document.getElementById("date");

const lucky = document.getElementById("luckyNo");

const happy = document.querySelector(".happyoutput");
const sad = document.querySelector(".sadoutput");
const formDetails = document.querySelector(".enter-details");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateValue = date.value.split("-").join("");

  let sum = 0;
  for (digit of dateValue) {
    sum += Number(digit);
  }
  const luckyNumber = Number(lucky.value);

  if (sum % luckyNumber === 0) {
    formDetails.style.display = "none";
    happy.style.display = "block";
  } else {
    formDetails.style.display = "none";
    sad.style.display = "block";
  }
});
