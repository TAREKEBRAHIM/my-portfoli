$(document).ready(function () {
  initMenuToggle();
  initSideNavigation();
  initCircularProgressBars();
  initPortfolioFilter();
  initScrollToTop();
});

/* ---------- Menu Toggle ---------- */
function initMenuToggle() {
  $('.menu-toggle').on('click', function () {
    $('.menu').toggleClass('show');
  });
}

/* ---------- Side Navigation ---------- */
function initSideNavigation() {
  $('#openNav').on('click', function () {
    $('#mySidenav').css('width', '250px');
  });

  $('#closeNav').on('click', function () {
    $('#mySidenav').css('width', '0');
  });
}

/* ---------- Circular Progress Bars ---------- */
function initCircularProgressBars() {
  $('.progress-wrapper').each(function () {
    const $wrapper = $(this);
    const percentage = $wrapper.data('percentage');
    const $circle = $wrapper.find('.progress');
    if (!$circle.length) return;

    const circle = $circle[0];
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    $circle.css({
      'stroke-dasharray': circumference,
      'stroke-dashoffset': offset
    });

    $wrapper.find('.percent-text').text(`${percentage}%`);
  });
}

/* ---------- Portfolio Filtering ---------- */
function initPortfolioFilter() {
  $('.filter-buttons button').on('click', function () {
    const filter = $(this).data('filter');

    $('.filter-buttons button').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.portfolio-item').fadeIn();
    } else {
      $('.portfolio-item').hide();
      $(`.portfolio-item.${filter}`).fadeIn();
    }
  });
}

/* ---------- Scroll To Top Button ---------- */
function initScrollToTop() {
  const $scrollBtn = $('#scrollTopBtn');

  if (!$scrollBtn.length) return;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $scrollBtn.fadeIn();
    } else {
      $scrollBtn.fadeOut();
    }
  });

  $scrollBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
}


/* ---------- Scroll Animation jQuery ---------- */
$(document).ready(function () {
  let $sections = $("section, .portfolio-container, .contact-us-form, .footer-container");
  $sections.addClass("reveal");

  $(window).on("scroll", function () {
    $sections.each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).addClass("show");
      }
    });
  }).trigger("scroll"); 
});
