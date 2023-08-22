const loader = document.querySelector('.lds-ring'),
  navContainer = document.querySelector('.nav-container'),
  sidebarContainer = document.querySelector('.sidebar-container'),
  sidebarBtn = document.querySelector('.sidebar-btn'),
  closeBtn = document.querySelector('.close-btn'),
  sidebarModal = document.querySelector('.sidebar-modal'),
  scrollTop = document.querySelector('.scroll-top'),
  date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

window.addEventListener('load', () => {
  loader.classList.add('hide-loader');
});

sidebarBtn.addEventListener('click', (e) => {
  sidebarContainer.classList.add('show-sidebar');
  sidebarModal.classList.add('show-modal');
});

closeBtn.addEventListener('click', (e) => {
  sidebarContainer.classList.remove('show-sidebar');
  sidebarModal.classList.remove('show-modal');
});

window.addEventListener('scroll', (e) => {
  console.log(e.currentTarget.scrollY);
  if (e.currentTarget.scrollY > (16 / 100) * window.innerHeight) {
    navContainer.classList.add('nav-big');
    scrollTop.classList.add('show-link');
  } else {
    navContainer.classList.remove('nav-big');
    scrollTop.classList.remove('show-link');
  }
});
