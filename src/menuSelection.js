const menulist = ['heading1', 'heading2'];
const createMenu = (container) => {
  const menu = menulist.map((menuItem) => `<li>${menuItem}</li>`);
  const menuList = document.createElement('ul');
  menuList.innerHTML = menu.join('');
  container.appendChild(menuList);
};

export default createMenu;
