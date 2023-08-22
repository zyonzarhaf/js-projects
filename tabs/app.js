const tabData = [
  {
    id: 1,
    tabName: 'history',
    tabText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    id: 2,
    tabName: 'vision',
    tabText:
      'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
  },
  {
    id: 3,
    tabName: 'goals',
    tabText:
      'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
  },
];

const about = document.querySelector('.about');
const tabs = document.querySelector('.tabs');
const tabContent = document.querySelector('.tab-content');

let currentTab;

window.addEventListener('DOMContentLoaded', function () {
  createTabButtons();
  setCurrentTab();
});

const createTabButtons = function () {
  tabs.innerHTML = tabData
    .map((item) => {
      const { tabName } = item;
      return `<button type="button" id="${tabName}" class="tab-button">${tabName}</button>`;
    })
    .join('');
};

const setCurrentTab = function () {
  currentTab = tabs.firstElementChild;
  currentTab.classList.add('active');
  updateTabContent(currentTab);

  tabs.childNodes.forEach(function (button) {
    button.addEventListener('click', function (e) {
      currentTab = e.currentTarget;
      tabs.childNodes.forEach(function (button) {
        button.classList.remove('active');
      });

      currentTab.classList.add('active');
      updateTabContent(currentTab);
    });
  });
};

const updateTabContent = function (currentTab) {
  const { tabName, tabText } = tabData.find(function (td) {
    const { tabName } = td;
    return tabName === currentTab.id;
  });

  tabContent.innerHTML = `<h5>${tabName}</h5><p>${tabText}</p>`;
};
