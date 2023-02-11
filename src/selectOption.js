import { removeMenu } from './menuSelection';

const selectOption = (editableInput) => {
  const menuOptions = document.querySelectorAll('.menu-item');
  menuOptions.forEach((item) => {
    item.addEventListener('click', () => {
      const newLine = document.createElement(item.role);
      newLine.contentEditable = true;
      newLine.setAttribute('data-placeholder', `heading${item.role.slice(-1)}`);
      newLine.textContent = '';
      newLine.className = 'editable-input';
      // newLine.classList.add(item.role);
      editableInput.appendChild(newLine);
      removeMenu();
    });
  });
};

export default selectOption;
