// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      autoplay: {
      delay: 3000,
      },

      // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    });
    
});

// toTop BTN
$(document).ready(function () {
  $("#toTop").click(function (e) { 
      e.preventDefault();
      $("html,body").animate({
          scrollTop:0
      },200);
  });
});

// 密碼顯示 BTN
function password(x) {
  x.classList.toggle("fa-eye");
}

// 重整 BTN
function refresh(y) {
  $("#refresh").addClass("rotate-360 transition duration-150 ease-in-out");
}