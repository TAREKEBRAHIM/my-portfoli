$(document).ready(function () {
  // Toggle menu
  $('.menu-toggle').click(function () {
    $('.menu').toggleClass('show');
  });

  // Side navigation
  $('#openNav').click(function () {
    $('#mySidenav').css('width', '250px');
  });

  $('#closeNav').click(function () {
    $('#mySidenav').css('width', '0');
  });

  // Circular progress bars
  $('.progress-wrapper').each(function () {
    const $this = $(this);
    const percentage = $this.data('percentage');
    const circle = $this.find('.progress')[0];
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    $(circle).css({
      'stroke-dasharray': circumference,
      'stroke-dashoffset': offset
    });

    $this.find('.percent-text').text(`${percentage}%`);
  });

  // Portfolio filter buttons
  $('.filter-buttons button').click(function () {
    const filter = $(this).data('filter');

    $('.filter-buttons button').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.portfolio-item').show();
    } else {
      $('.portfolio-item').hide();
      $('.portfolio-item.' + filter).show();
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#scrollTopBtn').fadeIn();
    } else {
      $('#scrollTopBtn').fadeOut();
    }
  });

  $('#scrollTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});
