$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
    $('.header__popup').toggleClass('active');
  });

  $('.accordion').on("click", function () {
    $('.categories').toggle('slow');
    $('.categories').toggleClass('show');
    $('.accordion__icon').toggleClass('rotate');
  });

  mixitup('.thumbs');
});