'use strict';

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsList = document.querySelector('ul');

const pick = function (bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
};

const sortedBands = [...bands].sort((a, b) => (pick(a) > pick(b) ? 1 : -1));

console.log(bands);
console.log(sortedBands);

const renderBands = function (bands) {
  bands.forEach(band => {
    const li = `
      <li>${band}</li>
    `;

    bandsList.insertAdjacentHTML('beforeend', li);
  });
};

renderBands(sortedBands);
