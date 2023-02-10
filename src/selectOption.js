const selectOption = () => {
  const menuOptions = document.querySelectorAll('.menu-item');
  menuOptions.forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item.role);
    });
  });
};

export default selectOption;
