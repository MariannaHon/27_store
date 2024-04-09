
// Тут кнопки, на які я додам слухачів подій

const shopBtn = document.querySelector('.l-shop');
const brandBtn = document.querySelector('.l-brand');
const countriesBtn = document.querySelector('.l-countries');
const flagBtn = document.querySelector('.flag-icon');
const searchBtn = document.querySelector('.l-search');
const bagBtn = document.querySelector('.l-bag');
const onClick = document.querySelector('.search-item');

// Тут модалки

const shop = document.querySelector('.h-shop');
const brand = document.querySelector('.h-brand');
const countries = document.querySelector('.h-countries');
const flag = document.querySelector('.h-flag');
const search = document.querySelector('.h-search');
const bag = document.querySelector('.h-bag');

// Тут модалки, які відкриваються, по наведенню миші

shopBtn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  shop.classList.toggle('hiden');
});

brandBtn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  brand.classList.toggle('hiden');
});

countriesBtn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  countries.classList.toggle('hiden');
});

flagBtn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  flag.classList.toggle('hiden');
});

// Тут слухачі на відведення миші, щоб віконця закривались

shopBtn.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  const delay1 = setTimeout(() => {
    shop.classList.toggle('hiden');
  }, 2000)
});

brandBtn.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  const delay2 = setTimeout(() => {
    brand.classList.toggle('hiden');
  }, 2000)
});

countriesBtn.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  const delay3 = setTimeout(() => {
    countries.classList.toggle('hiden');
  }, 2000)
});

flagBtn.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  const delay4 = setTimeout(() => {
    flag.classList.toggle('hiden');
  }, 2000)
});

// Тут модалки, які відкриваються по кліку

searchBtn.addEventListener('click', () => {
  search.classList.toggle('is-open');
});

bagBtn.addEventListener('click', () => {
  bag.classList.toggle('is-open');
});

// Закриття по кліку

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    search.classList.remove('is-open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    bag.classList.remove('is-open');
  }
});

