import './style.css';
import createMenu, { removeMenu } from './menuSelection.js';
import selectOption from './selectOption.js';
import filterMenuOptions from './filterMenu.js';

const contentContainer = document.getElementById('edit-container');
const firstInput = document.getElementById('input-1');

const newInputHandler = (editor = firstInput) => {
  editor.addEventListener('input', () => {
    if (editor.textContent[0] === '/') {
      // create a selection menu
      createMenu(editor);
      // select option
      selectOption(editor);
      filterMenuOptions(editor.textContent.slice(1));
    } else {
      removeMenu();
    }
  });

  // handle the case to create a new line
  editor.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (editor.textContent === '') {
        editor.removeAttribute('data-placeholder');
      }
      const newEle = document.createElement('div');
      newEle.classList.add('editable-input');
      newEle.contentEditable = true;
      newEle.setAttribute('data-placeholder', 'Type / for blocks, @ link docs');
      newEle.id = 'input-1';
      contentContainer.appendChild(newEle);
      newEle.focus();
      newInputHandler(newEle);
    }
  });
};

newInputHandler();
