const menulistItems = ['heading1', 'heading2'];
let isMenuCreated = false;
const createMenu = (container) => {
  if (isMenuCreated) return;
  const menu = menulistItems.map(
    (menuItem) => `<li class='menu-item' role=${menuItem}>${menuItem}</li>`
  );
  const menuList = document.createElement('ul');
  menuList.setAttribute('id', 'menu-list');
  menuList.innerHTML = menu.join('');
  container.appendChild(menuList);
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
