import './style.css';
import createMenu, { removeMenu } from './menuSelection.js';

const contentContainer = document.getElementById('edit-container');
const firstInput = document.getElementById('input-1');

firstInput.addEventListener('input', () => {
  if (firstInput.textContent === '/') {
    // create a selection menu
    createMenu(contentContainer);
    // select option
  } else {
    removeMenu();
  }
});
