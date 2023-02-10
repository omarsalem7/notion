const filterMenuOptions = (selectTerm) => {
  const menuOptions = document.querySelectorAll('.menu-item');
  menuOptions.forEach((item) => {
    console.log('term', selectTerm.slice(1));
    console.log(item.textContent.includes(selectTerm.slice(1)));
  });
};

export default filterMenuOptions;
