const filterMenuOptions = (selectTerm) => {
  const menuOptions = document.querySelectorAll('.menu-item');
  menuOptions.forEach((item) => {
    if (item.textContent.includes(selectTerm)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

export default filterMenuOptions;
