const btn = document.querySelector(".modalbtnExample");
const dummybtncontainer = document.querySelector(".modal-dummy");

const modalV3 = document.querySelector(".modal-v3");
const closeModalV3 = document.querySelector(".closeModal-v3");

btn.addEventListener("click", () => {
  modalV3.style.display = "flex";
});
closeModalV3.addEventListener("click", () => {
  modalV3.style.display = "none";
});
