import "./index.html";
import "./index.scss";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  modules: [Navigation, Pagination],
  direction: "horizontal",
  // Optional parameters
  loop: true,
  // If we need pagination
  slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets:true,
      },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    
    400: {
      slidesPerView: 2,
  centerInsufficientSlides: true,
  spaceBetween: 40,
  pagination: {
    dynamicBullets:false,
  }
    }
  }
  
});

burger.addEventListener("click",burgerMenu)
function burgerMenu(){
 headerContainer.classList.toggle('hidden');



}

const formElement = document.getElementById('form1'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  console.log(formData.get('name'))
  console.log(formData.get('email'))
  console.log(formData.get('message'))
});
