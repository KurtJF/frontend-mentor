const ratingState = document.querySelector(".rating-state");
const tyState = document.querySelector(".ty-state");
const submitBtn = document.getElementById("submit");
const rating = document.getElementById("rating");
const btnNums = document.querySelectorAll(".btn-num");

submitBtn.addEventListener("click", () => {
  tyState.classList.remove("hidden");
  ratingState.style.display = "none";
});

btnNums.forEach((btnNum) => {
  btnNum.addEventListener("click", () => {
    btnNums.forEach((btn) => btn.classList.remove("clicked"));
    btnNum.classList.add("clicked");
    rating.innerHTML = btnNum.innerHTML;
  });
});
