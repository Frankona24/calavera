/* ============================================
   CALAVERA STVDIO - JavaScript
   ============================================ */

(function($) {
  'use strict';

  // Preloader
  $(window).on('load', function() {
    $('.preloader').addClass('fade-out');
    setTimeout(function() {
      $('.preloader').remove();
    }, 600);
  });

  // Sticky Navigation
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.navigation').addClass('scrolled');
    } else {
      $('.navigation').removeClass('scrolled');
    }
  });

  // Mobile menu items close on click (for any overlay behavior)
  $('.nav-link').on('click', function() {
    $('.navbar-nav').removeClass('active');
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800);
    }
  });

  // Fade-in animation on scroll
  function checkFadeIn() {
    $('.fade-in').each(function() {
      var elementTop = $(this).offset().top;
      var viewportBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < viewportBottom - 50) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll', checkFadeIn);
  $(document).ready(checkFadeIn);

  // Hero parallax effect
  $(window).on('scroll', function() {
    var scrolled = $(this).scrollTop();
    $('.hero-content').css('transform', 'translateY(' + scrolled * 0.3 + 'px)');
    $('.hero-content').css('opacity', 1 - scrolled / 700);
  });

  // Testimonial auto-rotate (fade)
  var $items = $('.testimonial-item');
  var $dotsContainer = $('.testimonial-dots');
  var current = 0;

  for (var i = 0; i < $items.length; i++) {
    var dot = $('<button class="testimonial-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" aria-label="Testimonial ' + (i + 1) + '"></button>');
    $dotsContainer.append(dot);
  }

  function showTestimonial(index) {
    $items.removeClass('active');
    $items.eq(index).addClass('active');
    $('.testimonial-dot').removeClass('active');
    $('.testimonial-dot[data-index="' + index + '"]').addClass('active');
  }

  $('.testimonial-dots').on('click', '.testimonial-dot', function() {
    showTestimonial($(this).data('index'));
    current = $(this).data('index');
  });

  setInterval(function() {
    current = (current + 1) % $items.length;
    showTestimonial(current);
  }, 5000);

})(jQuery);

// Google Maps (iframe embed - no API needed)
