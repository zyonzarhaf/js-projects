const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.png',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.png',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.png',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.png',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.png',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.png',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.png',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.png',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.png',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuCategories = ['all', ...new Set(menu.map((item) => item.category))];

const DOM_filters = document.querySelector('.filters');
const DOM_menuItems = document.querySelector('.menu-items');

window.addEventListener('DOMContentLoaded', () => {
  displayFilterBtns(menuCategories);
  displayMenuItems(menu);
});

const displayFilterBtns = (menuCategories) => {
  const filterBtns = menuCategories.map((item) => {
    return (
      `<div class="filter">
        <button type="button" id="${item}" class="filter-btn">
            ${item}
        </button>
        <img src="./images/${item}.jpg" alt="${item}" />
      </div>`
    );
  });
  console.log(filterBtns.length)
  DOM_filters.style.gridTemplateColumns = `repeat(${filterBtns.length}, 1fr)`;
  DOM_filters.innerHTML = filterBtns.join('');

  filterMenuItems(menu);
};

const displayMenuItems = (menu) => {
  const menuItems = menu.map((item) => {
    const { title, price, img, desc } = item;
    return (
      `<article class="menu-item">
        <img src="${img}" alt="${title}" class='product-img'/>
        <div class='info'>
          <h4>
              ${title}
          </h4>
          <h5>
              $${price}
          </h5>
          <p>
              ${desc}
          </p>
        </div>
      </article>`
    );
  });
  DOM_menuItems.innerHTML = menuItems.join('');
};

const filterMenuItems = (menu) => {
  const DOM_filterBtns = document.querySelectorAll('.filter-btn');
  DOM_filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const filteredMenuItems = menu.filter((item) => {
        if (e.currentTarget.id === 'all') {
          return item;
        }
        if (e.currentTarget.id === item.category) {
          return item;
        }
      });
      displayMenuItems(filteredMenuItems);
    });
  });
};