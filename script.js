const openButton = document.getElementById('open-sidebar-button');
const closeButton = document.getElementById('close-sidebar-button');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');
const media = window.matchMedia('(max-width: 700px)');

function applyInert() {
  if (media.matches) {
    if (!navbar.classList.contains('show')) navbar.setAttribute('inert', '');
  } else {
    navbar.removeAttribute('inert');
    navbar.classList.remove('show');
    overlay.style.display = 'none';
    openButton.setAttribute('aria-expanded', 'false');
  }
}
applyInert();
media.addEventListener('change', applyInert);

function openSidebar() {
  navbar.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true');
  navbar.removeAttribute('inert');
  overlay.style.display = 'block';
}
function closeSidebar() {
  navbar.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false');
  navbar.setAttribute('inert', '');
  overlay.style.display = 'none';
}

openButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
navbar.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> { if (media.matches) closeSidebar(); });
});