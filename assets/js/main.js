/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function ($) {
  "use strict";

  // Data Js
  $("[data-bg-image]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-bg-image") + ")"
    );
  });

  // 01. PreLoader Js
  $(document).ready(function () {
    $(".preloader").fadeOut(100); // Hide preloader quickly when DOM is ready
  });

  $(document).ready(function ($) {
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > 500) {
        $(".tj-header-area.header-sticky").addClass("sticky");
        $(".tj-header-area.header-sticky").removeClass("sticky-out");
      } else if (scroll < lastScrollTop) {
        if (scroll < 500) {
          $(".tj-header-area.header-sticky").addClass("sticky-out");
          $(".tj-header-area.header-sticky").removeClass("sticky");
        }
      } else {
        $(".tj-header-area.header-sticky").removeClass("sticky");
      }

      lastScrollTop = scroll;
    });

    // Meanmenu Js
    $("#headerMenu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991",
      meanExpand: [
        "<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
      ],
    });

    // Hamburger Menu Js
    $(".menu-bar").on("click", function () {
      $(".menu-bar").toggleClass("menu-bar-toggeled");
      $(".mobile-menu").toggleClass("opened");
      $("body").toggleClass("overflow-hidden");
    });

    $(".mobile-menu ul li a")
      .not(".mean-expand")
      .on("click", function () {
        $(".menu-bar").removeClass("menu-bar-toggeled");
        $(".mobile-menu").removeClass("opened");
        $("body").removeClass("overflow-hidden");
      });

    /*------------------------------------------------------
  	/  OnePage Active Class
  	/------------------------------------------------------*/
    var activeSection = null;
    function updateActiveSection() {
      var windowHeight = $(window).height();
      var windowMiddle = windowHeight / 2;

      $("section").each(function () {
        var section = $(this);
        var sectionTop = section.offset().top;

        // Check if the top of the section is in the middle of the screen
        if (sectionTop <= $(window).scrollTop() + windowMiddle) {
          activeSection = section.attr("id");
        }
      });

      updateActiveListItem();
    }

    function updateActiveListItem() {
      $(".tj-header-menu ul li a").each(function () {
        var anchor = $(this);
        var listItem = anchor.closest(".menu-item");
        if (anchor.attr("href") === "#" + activeSection) {
          listItem.addClass("current");
        } else {
          listItem.removeClass("current");
        }
      });
    }

    $(window).on("scroll", function () {
      updateActiveSection();
    });

    // Initial call to set active section on page load
    updateActiveSection();
  });

  // Accordion Js
  if ($(".accordion-item").length > 0) {
    $(".accordion-item .faq-title").on("click", function () {
      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
      } else {
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
      }
    });
  }

  // Marquee Js
  var slider = new Swiper(".marquee-area--primary .tj-marquee-active", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 50,
      },
      992: {
        spaceBetween: 40,
      },
      768: {
        spaceBetween: 30,
      },
      576: {
        spaceBetween: 20,
      },
    },
  });
  var slider = new Swiper(".marquee-area--dark .tj-marquee-active", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
      reverseDirection: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 50,
      },
      992: {
        spaceBetween: 40,
      },
      768: {
        spaceBetween: 30,
      },
      576: {
        spaceBetween: 20,
      },
    },
  });

  // Project Js
  var slider = new Swiper(".tj-project-active", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1.5,
        spaceBetween: 25,
      },
    },
  });

  // Rating Js
  if ($(".fill-ratings span").length > 0) {
    var star_rating_width = $(".fill-ratings span").width();
    $(".star-ratings").width(star_rating_width);
  }

  // hidden item
  $(".hidden-item").hide();
  $(".load-btn").on("click", function (e) {
    e.preventDefault();
    $(".hidden-item").slideDown();
    $(".testimonial_wrap").addClass("overlay-hide");
    $(this).hide();
  });

  $(window).on("load", function () {
    // WoW Js
    var wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 100, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();
  });

  /*****************************************************************
================================= GSAP ====================================
********************************************************************/
  gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

  gsap.config({
    nullTargetWarn: false,
  });

  /* Text Effect Animation */
  if ($(".text-anim").length) {
    let staggerAmount = 0.03,
      translateXValue = 20,
      delayValue = 0.1,
      easeType = "power2.out",
      animatedTextElements = document.querySelectorAll(".text-anim");

    animatedTextElements.forEach((element) => {
      let animationSplitText = new SplitText(element, {
        type: "chars, words",
      });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }

  // Lenis Scroll Js

  /*
	============================== Lenis Scroll Js =====================================
	*/
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const serviceCards = document.querySelectorAll(".tj-service-wrapper");
  serviceCards?.forEach((serviceCard, idx) => {
    serviceCard?.addEventListener("mouseenter", function () {
      serviceCards?.forEach((serviceCardMain) => {
        serviceCardMain?.classList?.remove("active");
      });
      this?.classList?.add("active");
    });
  });

  ////////////////////////////////////////////////////
  // Scroll To Top Js
  $(window).on("scroll", function () {
    var pagescroll = $(window).scrollTop();
    if (pagescroll > 500) {
      $(".scroll-to-top").addClass("scroll-to-top-visible");
    } else {
      $(".scroll-to-top").removeClass("scroll-to-top-visible");
    }
  });

  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
})(jQuery);
