const selectOption = () => {
  const selectionOptions = document.querySelectorAll('.menu-item');
  selectionOptions.forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item.role);
    });
  });
};

export default selectOption;
