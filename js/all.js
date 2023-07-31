// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      // loop: true,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      // autoplay: {
      // delay: 3000,
      // },

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
function refresh(x) {
  $("#refresh").addClass("rotate-360 transition duration-150 ease-in-out");
}

// 功能選單 BTN
function function__dropdown() {
  const x = document.getElementById("function__content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// 表單排序 BTN
function sort(x) {
  x.classList.toggle("fa-sort-up");
}

// Table-scroll tab 
$('.arrow-right').on('click', function () {
  document.getElementById('pills-tab').scrollLeft += 140;
});

$('.arrow-left').on('click', function () {
  document.getElementById('pills-tab').scrollLeft -= 140;
});