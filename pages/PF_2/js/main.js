$(document).ready(function(){

  $(".visual").addClass("up");
  setTimeout(function () {
    
  });

  const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 48,
    pagination: {
      el: ".interview .swiper-pagination",
      clickable: true,
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({  
    scrollTrigger: {
      trigger: '.category',
      start: "0% 60%",
      end: "70% 70%",
      scrub: 1,
    },
    y: -50,
  })
  .to('.category .card:nth-of-type(1)', {duration: 0.1, opacity: 1, y: 0})
  .to('.category .card:nth-of-type(2)', {duration: 0.2, opacity: 1, y: 0})
  .to('.category .card:nth-of-type(3)', {duration: 0.3, opacity: 1, y: 0})

  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'fixed', targets: '.header'}
  });
  

})
