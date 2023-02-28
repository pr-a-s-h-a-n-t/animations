document.addEventListener('DOMContentLoaded', init);
  
function init() {
  [...document.querySelectorAll('.waitload')]
  .map(e => e.classList.remove('waitload'));
}