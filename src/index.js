import './style.css';
import createMenu, { removeMenu } from './menuSelection.js';
import selectOption from './selectOption.js';
import filterMenuOptions from './filterMenu.js';
import hitNumberHandler, {
  createNewEmptylineHandler,
} from './hitEnterHandler.js';

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
  editor.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (editor.textContent[0] === '/' && editor.textContent[1] === '1') {
        hitNumberHandler(editor, 'heading1');
      } else if (
        editor.textContent[0] === '/'
        && editor.textContent[1] === '2'
      ) {
        hitNumberHandler(editor, 'heading2');
      } else if (editor.textContent === '') {
        newInputHandler(createNewEmptylineHandler(editor, contentContainer));
      }
    }
  });
};

newInputHandler();
