import { removeMenu } from './menuSelection.js';

const hitNumberHandler = (editor, heading) => {
  editor.classList.add('editable-input', heading);
  editor.setAttribute('data-placeholder', heading);
  editor.textContent = editor.textContent.slice(2);
  editor.focus();
  removeMenu();
};

export const createNewEmptylineHandler = (editor, contentContainer) => {
  editor.removeAttribute('data-placeholder');
  const newEle = document.createElement('div');
  newEle.classList.add('editable-input');
  newEle.contentEditable = true;
  newEle.setAttribute('data-placeholder', 'Type / for blocks, @ link docs');
  newEle.id = 'input-1';
  contentContainer.appendChild(newEle);
  newEle.focus();
  return newEle;
};

export default hitNumberHandler;
