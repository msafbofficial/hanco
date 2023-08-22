$(function(){


     // cursor-js 
     var kursorx = new kursor({
      type: 1,
      removeDefaultCursor: false,
      color:"#ecfb00"
    })

  $(function() {
    // update on window scroll or resize
    $(window).on("resize scroll", function() {
      updateProgress(".progress");
    });
    
    function updateProgress(element) {
      var height = $(document).height() - $(window).height(),
          progress = $(window).scrollTop() / height;
      
      $(element).css("width", (progress * 100) + "%");
    }
    
  });




// popular-slick 
$('.one').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:".next",
    prevArrow:".prev",
    autoplay:true,
    autoplaySpeed:2000,
  });




// mobile nav
const openBtn = document.querySelector("#nav-opn-btn");
const closeBtn = document.querySelector("#nav-cls-btn");
const offcanvasContainer = document.querySelector("#offcanvas-nav");

function openNav() {
  document.body.style.overflowY = "hidden";
  offcanvasContainer.classList.add("open");
}

function closeNav() {
  document.body.style.overflowY = "";
  offcanvasContainer.classList.remove("open");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);






// vedio-slick 
$('.vedio-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },

  ]

  });

  // cetagori-slick 

  // prov-slick
$('.prov-slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:".a",
    prevArrow:".b",
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
  
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
  
        }
      },
  
    ]

  });

// preloder-js 
 $(window).load(function(){
    $('#preloader').delay(5000).fadeOut(200, function() {
          $('body').css('overflow','visible');
          $(this).remove();
       });




       

      // back to top 
      $(" .backto-top i").click(function(){

        $('html,body').animate({
          scrollTop:0,
      
        })
      })

      $(window).scroll(function(){
      
        var scrolling = $(this).scrollTop()
        if(scrolling > 20 ){
          $(".backto-top i").fadeIn(500)
        }else{
          $(".backto-top i").fadeOut(500)
        }
      
        if(scrolling > 50 ){
          $(".menu-bg").addClass("nav-bg")
        }else{
          $(".menu-bg").removeClass("nav-bg")
        }
      
      })



      // counter-js 
      $('.counter').counterUp({
        delay: 100,
        time: 5000
    });


    // aso-js 
    AOS.init();

 



  




  });

  new VenoBox();



  // swiper js 
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });



})