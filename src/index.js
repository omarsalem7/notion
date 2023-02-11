import './style.css';
import createMenu, { removeMenu } from './menuSelection.js';
import selectOption from './selectOption.js';
import filterMenuOptions from './filterMenu.js';

const contentContainer = document.getElementById('edit-container');
const firstInput = document.getElementById('input-1');
firstInput.focus();

const newInputHandler = (editor = firstInput) => {
  editor.addEventListener('input', () => {
    if (editor.textContent[0] === '/') {
      createMenu(editor);
      selectOption(editor);
      filterMenuOptions(editor.textContent.slice(1));
    } else {
      removeMenu();
    }
  });
  createNewLine(editor);
};

const createNewLine = (editor) => {
  // handle the case to create a new line
  editor.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (editor.textContent[0] === '/' && editor.textContent[1] === '1') {
        // editor.className = 'input';
        editor.classList.add('editable-input', 'heading1');
        editor.setAttribute('data-placeholder', 'Heading 1');
        editor.textContent = editor.textContent.slice(2);
        editor.focus();
        removeMenu();
      } else if (editor.textContent === '') {
        editor.removeAttribute('data-placeholder');
        const newEle = document.createElement('div');
        newEle.classList.add('editable-input');
        newEle.contentEditable = true;
        newEle.setAttribute(
          'data-placeholder',
          'Type / for blocks, @ link docs'
        );
        newEle.id = 'input-1';
        contentContainer.appendChild(newEle);
        newEle.focus();
        newInputHandler(newEle);
      }
    }
  });
};

newInputHandler();
