import './style.css';
import createMenu, { removeMenu } from './menuSelection.js';
import selectOption from './selectOption.js';
import filterMenuOptions from './filterMenu';

const contentContainer = document.getElementById('edit-container');
const firstInput = document.getElementById('input-1');

firstInput.addEventListener('input', () => {
  if (firstInput.textContent[0] === '/') {
    // create a selection menu
    createMenu(contentContainer);
    // select option
    selectOption();
    filterMenuOptions(firstInput.textContent.slice(1) || '');
  } else {
    removeMenu();
  }
});
