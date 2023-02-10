const filterMenuOptions = (selectTerm) => {
  const menuOptions = document.querySelectorAll('.menu-item');
  [...menuOptions].forEach((item) => {
    console.log(item.textContent.includes(selectTerm));
    if (item.textContent.includes(selectTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

export default filterMenuOptions;
