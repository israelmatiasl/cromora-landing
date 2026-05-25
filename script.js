const modal = document.getElementById("registerModal");
const openButtons = document.querySelectorAll(".open-register");
const closeModalButton = document.getElementById("closeModal");
const cancelModalButton = document.getElementById("cancelModal");
const registerForm = document.getElementById("registerForm");
const formNote = document.getElementById("formNote");

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

openButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

closeModalButton.addEventListener("click", closeModal);
cancelModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formNote.textContent =
    "Formulario de demostración: el registro aún no está conectado a un backend.";

  setTimeout(() => {
    formNote.textContent = "";
  }, 4500);
});