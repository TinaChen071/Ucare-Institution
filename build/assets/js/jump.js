const menuToggle = document.getElementById('jump__btn');
const menuClose = document.getElementById('jump__close');
const sideMenu = document.getElementById('jump__menu');

menuToggle.addEventListener('click', function() {
  sideMenu.classList.remove('hidden');
});

menuClose.addEventListener('click', function() {
  sideMenu.classList.add('hidden');
});



// function jumpFunction() {
//   const x = document.getElementById("jump__menu");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }







