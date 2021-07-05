export const switchDropDownMenuClass = (element) => {
  const addDropdownMenuClass = () => {
    element.classList.add('dropdown-menu');
  };

  const removeDropdownMenuClass = () => {
    element.classList.remove('dropdown-menu');
  };

  const toggleDropdownMenuClass = () => {
    window.innerWidth > 768 
      ? removeDropdownMenuClass()
      : addDropdownMenuClass()
  };

  toggleDropdownMenuClass();
  
  window.addEventListener('resize', toggleDropdownMenuClass);
}