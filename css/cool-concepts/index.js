// add close functionality to dialog element
const dialog = document.querySelector("dialog");
dialog.querySelector(".dialogBtn").addEventListener("click", () => {
  dialog.close();
});
