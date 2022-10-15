var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  watchSlidesProcess: true
});

var slide_hero = new Swiper(".slide-principal", {
  effect: 'fade',
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000
  }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) =>
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active');
    });

    tabPane.forEach(item => {
      item.classList.remove('active');
    });

    tabPane[index].classList.add('active');

    filter.classList.add('active');
  }));