const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

sidebarBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  modal.classList.remove('show-modal');
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 800) {
    sidebar.classList.remove('show-sidebar');
    modal.classList.remove('show-modal');
  }
});