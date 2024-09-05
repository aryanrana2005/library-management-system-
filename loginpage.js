const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
//function for text formate changing normal to bold after click
function changetextformate()
{
  const selectBox = document.getElementById('roleselect');
  selectBox.style.color = 'black';
  selectBox.style.fontWeight = 'bold';
}