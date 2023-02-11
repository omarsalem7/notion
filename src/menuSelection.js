import textIcon from './icons/text.png';

const menulistItems = ['heading1', 'heading2'];
let isMenuCreated = false;
const createMenu = (editor) => {
  if (isMenuCreated) return;
  const menu = menulistItems.map(
    (menuItem) => `<li class='menu-item' role=${menuItem}><img src=${textIcon} alt="dsadsa"/><span>${
      menuItem[0].toUpperCase() + menuItem.slice(1)
    }</span></li>`,
  );
  const menuListContent = `
    <div>Choose block</div>
    ${menu.join('')}
  `;
  const menuList = document.createElement('ul');
  menuList.setAttribute('id', 'menu-list');
  menuList.innerHTML = menuListContent;
  editor.after(menuList);
  isMenuCreated = true;
};

export const removeMenu = () => {
  document.getElementById('menu-list')?.remove();
  isMenuCreated = false;
};

// Handle the case when user click escape the menu removed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    removeMenu();
  }
});

export default createMenu;
