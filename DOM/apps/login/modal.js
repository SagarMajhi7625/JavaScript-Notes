let modalEl = document.querySelector("#log-modal");
let logBtn = document.querySelector("#log-btn");
let closeBtn = document.querySelector("#close-btn");

function showModal() {
  modalEl.classList.remove("hidden");
}

function closeModal() {
  modalEl.classList.add("hidden");
}

logBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    closeModal();
  }
});
