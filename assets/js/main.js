$(document).ready(() => {
  $('.navbar__burger-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar__list').toggleClass('active');
  });
});