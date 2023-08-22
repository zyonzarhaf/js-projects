const data = [
  {
    id: 1,
    category: 'rio-de-janeiro',
    image: './images/rj1.jpg',
    description: `statue of christ the redeemer`,
  },
  {
    id: 2,
    category: 'rio-de-janeiro',
    image: './images/rj2.jpg',
    description: `rio de janeiro sugar loaf mountain`,
  },
  {
    id: 3,
    category: 'rio-de-janeiro',
    image: './images/rj3.jpg',
    description: `copacabana sidewalk`,
  },
  {
    id: 4,
    category: 'rio-de-janeiro',
    image: './images/rj4.jpg',
    description: `rio de janeiro sugar loaf mountain at a distance`,
  },
  {
    id: 5,
    category: 'sao-paulo',
    image: './images/sp1.jpg',
    description: `a piece of artwork painted on the outside of a building in sao paulo`,
  },
  {
    id: 6,
    category: 'sao-paulo',
    image: './images/sp2.jpg',
    description: `the sao paulo art museum (MASP)`,
  },
  {
    id: 7,
    category: 'sao-paulo',
    image: './images/sp3.jpg',
    description: `the interior of a building in sao paulo, full of graffiti on it's walls`,
  },
  {
    id: 8,
    category: 'sao-paulo',
    image: './images/sp4.jpg',
    description: `sao paulo main avenue (the paulista avenue)`,
  },
  {
    id: 9,
    category: 'sao-paulo',
    image: './images/sp5.jpg',
    description: `city of sao paulo from above`,
  },
  {
    id: 10,
    category: 'brasilia',
    image: './images/bsb1.jpg',
    description: `oscar niemeyer's modernist architecture artwork`,
  },
  {
    id: 11,
    category: 'brasilia',
    image: './images/bsb2.jpg',
    description: `oscar niemeyer's modernist architecture artwork`,
  },
  {
    id: 12,
    category: 'brasilia',
    image: './images/bsb3.jpg',
    description: `oscar niemeyer's modernist architecture artwork`,
  },
  {
    id: 13,
    category: 'brasilia',
    image: './images/bsb5.jpg',
    description: `the federal district from a slightly above perspective`,
  },
];

class Gallery {
  constructor(element) {
    this.imageContainer = this.getElement(element);
    this.imageContainer.innerHTML = data
      .map((item) => {
        const { id, image, description, category } = item;
        return `<img
            id="${id}"
            src="${image}"
            alt="${description}"
            class="${category}"
          >`;
      })
      .join('');
    this.images = [...this.imageContainer.querySelectorAll('img')];
    this.modal = this.getElement('.modal');
    this.closeModalBtn = this.getElement('.close-btn');
    this.mainImage = this.getElement('.main-image').querySelector('figure');
    this.imageSelector = this.getElement('.image-selector');
    this.prevBtn = this.getElement('.prev-btn');
    this.nextBtn = this.getElement('.next-btn');
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setMainImage = this.setMainImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.imageContainer.addEventListener('click', (e) => {
      this.showModal(e.target, this.images);
    });
  }

  // Get element by css selector
  getElement(element) {
    return document.querySelector(element);
  }

  // Show modal with selected image
  showModal(selectedImage, modalImages) {
    // Set main image in modal
    this.setMainImage(selectedImage);

    // Filter images by category of selected image
    const filteredImages = modalImages.filter((image) =>
      selectedImage.classList.contains(image.classList)
    );

    // Populate image selector with filtered images
    this.imageSelector.innerHTML = filteredImages
      .map((image) => {
        const { id, classList, src, alt } = image;
        return `<img
              id="${id}"
              class="${
                id === selectedImage.id ? `${classList} selected` : classList
              }"
              src="${src}"
              alt="${alt}"
            >`;
      })
      .join('');

    // Add event listener to image selector
    this.imageSelector.addEventListener('click', (e) => {
      this.setMainImage(e.target);
      const selected = this.imageSelector.querySelector('.selected');
      selected.classList.remove('selected');
      e.target.classList.add('selected');
    });

    // Show modal
    this.modal.classList.add('show-modal');

    // Add event listeners to modal buttons
    this.closeModalBtn.addEventListener('click', this.closeModal);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.nextBtn.addEventListener('click', this.nextImage);
  }

  // Close modal and remove event listeners from modal buttons
  closeModal() {
    // Hide modal
    this.modal.classList.remove('show-modal');

    // Remove event listeners from modal buttons
    this.closeModalBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
  }

  // Set main image in modal to selected image
  setMainImage(selectedImage) {
    const { id, classList, src, alt } = selectedImage;
    this.mainImage.innerHTML = `
    <img id="${id}" class="${classList}" src="${src}" alt="${alt}">
    <figcaption>${alt}</figcaption>
    `;
  }

  // Change image when previous btn is clicked
  prevImage() {
    const selected = this.imageSelector.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.imageSelector.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }

  // Change image when next btn is clicked
  nextImage() {
    const selected = this.imageSelector.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.imageSelector.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  }
}

const gallery = new Gallery('.image-container');
