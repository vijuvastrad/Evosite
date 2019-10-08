$(document).ready(function () {
  // smooth scrolling
  $(document).ready(function () {
    var scrollLink = $('.scroll');
    scrollLink.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1500)
    })
  
  
  });
  //search box
  $('.active1').click(function () {
    $('.search-box').toggle();
    $("input[type='text']").focus();
  })

  //nav active
  $('.navbar-nav').on('click', 'mouseover', 'li', function () {
    $(this).addClass('active'), sibling().remove('active');
  })


  //News owl carocel
  $('#news-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    // dots:true,
    // stagePadding: 10,
    navText: ['<i class="fas  slider-arrows fa-arrow-left"></i>',
      '<i class="fas  slider-arrows fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }

  });

  //Twitter owl Carousel
  $('#twitter-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    // autoplayTimeout: 1520,
    // smartSpeed: 2000,
    // dots:true,
    stagePadding: 10,
    navText: ['<i class="fas  slider-arrows fa-arrow-left"></i>',
      '<i class="fas  slider-arrows fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }

  });
// Calender caroculs

$('#calendar-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  nav: true,
  // dots:true,
  stagePadding: 10,
  navText: ['<i class="fas  slider-arrows fa-arrow-left"></i>',
    '<i class="fas  slider-arrows fa-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }

});

  // Back to top
$('.back-to-top').click(function(){
  $('html').animate({scrollTop:0},1000);
});

});