/* Swiper */
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        960 :{
          slidesPerView: 2,
          spaceBetween: 20
        },
      }
})