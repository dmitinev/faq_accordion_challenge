import { testWebP as isWebPSupported } from './modules/testWebp.js';

isWebPSupported.then((result) => {
  const className = result ? 'webp' : 'no-webp';
  document.body.classList.add(className);
});

const faqItems = document.querySelectorAll('[data-item]');
const faqTexts = document.querySelectorAll('[data-text]');

if (faqItems && faqItems.length > 0) {
  faqItems.forEach((item) => {
    item.addEventListener('click', clickHandler);
  });
}

function clickHandler(event) {
  const targetNumber = event.currentTarget.dataset.item;
  faqItems.forEach((item) => {
    if (item.dataset.item !== targetNumber) {
      item
        .querySelector('.listItem__questionIcon')
        .classList.remove('listItem__questionIcon--active');
    } else {
      item
        .querySelector('.listItem__questionIcon')
        .classList.toggle('listItem__questionIcon--active');
    }
  });
  faqTexts.forEach((text) => {
    if (text.dataset.text !== targetNumber) {
      text.classList.remove('answer--active');
    } else {
      text.classList.toggle('answer--active');
    }
  });
}
