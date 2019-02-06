
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu-button");
  // console.log(menu);
  // console.log(menuButton);


// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   menu.classList.toggle('menu--open');
//   console.log('pressed it');
// }
// menuButton.addEventListener('click', toggleMenu);

$('.menu-button').click(function () { 
  $('.menu').toggle("slide");
});


// Start Here: Create a reference to the ".menu" class
// create a reference to the ".menu-button" class
// Using your menuButton reference, add a click handler that calls toggleMenu
