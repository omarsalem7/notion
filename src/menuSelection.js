const menulistItems = ['heading1', 'heading2'];
const createMenu = (container) => {
  const menu = menulistItems.map(
    (menuItem) => `<li class='menu-item' role=${menuItem}>${menuItem}</li>`
  );
  const menuList = document.createElement('ul');
  menuList.setAttribute('id', 'menu-list');
  menuList.innerHTML = menu.join('');
  container.appendChild(menuList);
};

export const removeMenu = () => {
  document.getElementById('menu-list')?.remove();
};

export default createMenu;
