const autoswiper = new Swiper('.Swiper', {
    pagination: {
      el: '.swiper-pagination-banner',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
   });

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay: {
    delay: 3000,
    },
    
    breakpoints: {
      220: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
  let abourSwiper = new Swiper('.swiper' , {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-about-us',
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      501: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });
  var brandbook = new Swiper(".brandbook-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
/*mobile-menu*/
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click' , function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
/*drop-menu */
let open = document.querySelector('.cla');
let dropMenu = document.querySelector('.menu-drop');
open.addEventListener('click' , function(){
  dropMenu.classList.toggle('active');
});

var isShowAdditionLogos = false;

function toggleShowAdditionlogos () {
  isShowAdditionLogos = !isShowAdditionLogos;
  var logoWrapperRef = document.getElementById("logoWrapper");
  var logoWrapperBtnRef = document.getElementById("logoWrapperBtn");
  if (isShowAdditionLogos) {
    logoWrapperRef.style.display = "block";
    logoWrapperBtnRef.innerText = "Скрыть";
  } else {
    logoWrapperRef.style.display = "none";
    logoWrapperBtnRef.innerText = "Показать ещё";
  }
}

var isShowLogos = false;

function toggleShowlogos() {
  isShowLogos = !isShowLogos;
  var logoContainerRef = document.getElementById("logoContainer");
  var logoContainerBtnRef = document.getElementById("logoContainerBtn");
  if (isShowLogos) {
    logoContainerRef.style.display = "block";
    logoContainerBtnRef.innerText = "Скрыть";
  } else {
    logoContainerRef.style.display = "none";
    logoContainerBtnRef.innerText = "Показать ещё";
  }
};
let click1 = document.querySelectorAll(".branding-right__img");
let openWindow = document.querySelector(".branding-right__wrapper");
for (let i = 0; i < click1.length; i++) {
    click1[i].addEventListener('click' , function(){
      openWindow.classList.toggle('active');
    });
};