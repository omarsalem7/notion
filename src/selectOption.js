import { removeMenu } from './menuSelection.js';

const selectOption = (editableInput) => {
  const menuOptions = document.querySelectorAll('.menu-item');
  menuOptions.forEach((item) => {
    item.addEventListener('click', () => {
      editableInput.setAttribute('data-placeholder', item.role);
      editableInput.textContent = '';
      editableInput.className = 'editable-input';
      editableInput.classList.add(item.role);
      editableInput.focus();
      removeMenu();
    });
  });
};

export default selectOption;
