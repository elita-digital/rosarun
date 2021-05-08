"use strict";

var $offsetNav,
    rtime,
    $main = $("body");

function offsetNextBlock() {
  $offsetNav = .4 * $(window).height();
}

$(document).ready(function () {
  $("body").on("click", ".count-inputs a.pl", function (e) {
    e.preventDefault(), $(this).parent().find(".min").removeClass("disabled");
    var t = parseInt($(this).parent().find("input").val()) + 1;
    $(this).parent().find("input").val(t);
  }).on("click", ".count-inputs a.min", function (e) {
    event.preventDefault();
    var t = parseInt($(this).parent().find("input").val()) - 1;
    t < 2 && (t = 1, $(this).addClass("disabled")), $(this).parent().find("input").val(t);
  }).on("click", ".select-gender", function (e) {
    e.preventDefault(), $(this).find("span").toggleClass("active");
  }).on("click", function (e) {
    $(e.target).closest(".dropdown-menu").size() > 0 && e.stopImmediatePropagation();
  }).on("click", ".button-menu-wrap", function (e) {
    e.preventDefault(), $("body").toggleClass("menu-opened");
  }).on("click", ".fancybox", function (e) {
    e.preventDefault();
    var t = $(this).attr("href");
    $.fancybox.close(), $.fancybox.open({
      src: t,
      type: "ajax",
      afterShow: function afterShow() {
        $("[type='tel']").intlTelInput(), $(".datepicker").datepicker({
          format: "dd/mm/yyyy",
          language: "ru",
          autoclose: !0
        });
      }
    });
  }).on("click", ".gallery-hashtag a", function (e) {
    e.preventDefault(), $(".gallery-hashtag a").removeClass("active"), $(this).addClass("active"), $(".gallery-slider").slick("slickUnfilter").slick("slickFilter", $(this).attr("data-filter"));
  }).on("click", ".track-header a", function (e) {
    e.preventDefault(), $(".track-header a").removeClass("active"), $(this).addClass("active"), $(".track-slider").slick("slickUnfilter").slick("slickFilter", $(this).attr("data-filter"));
  }).on("click", ".food-header a", function (e) {
    e.preventDefault(), $(".food-header a").removeClass("active"), $(this).addClass("active"), $(".food-slider").slick("slickUnfilter").slick("slickFilter", $(this).attr("data-filter"));
  }).on("click", ".logo a", function (e) {
    e.preventDefault(), $("body").removeClass("menu-opened"), $(".main-wrap-wrap").animate({
      scrollTop: 0
    }, 1e3);
  }).on("click", ".wrap-icon a", function (e) {
    if (!$(this).hasClass("lk-enter")) {
      e.preventDefault();
      var t = $(this).attr("href");
      $("body").removeClass("menu-opened").scrollTo(t, 600);
    }
  }).on("click", ".scrollTo", function (e) {
    e.preventDefault();
    var t = $(this).attr("href");
    $("body").scrollTo(t, 600);
  }).on("click", ".shadow", function () {
    $("body").removeClass("menu-opened");
  }), $(".reg-slider").slick({
    dots: !1,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: !1,
        dots: !0
      }
    }]
  }), $(".program-slider").slick({
    dots: !1,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0
      }
    }, {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0
      }
    }]
  }), $(".food-slider").slick({
    dots: !1,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1e3,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0
      }
    }]
  }), $(".activities__slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 240,
    autoplaySpeed: 2400,
    fade: !0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 640,
      settings: {
        arrows: !1,
        dots: !0
      }
    }]
  }), $(".partners__slider").slick({
    dots: !1,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 2400,
    autoplaySpeed: 2400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: !1
      }
    }, {
      breakpoint: 640,
      settings: "unslick"
    }]
  }), $(".js-show-all-program").on("click", function () {
    $(this).hasClass("black-button") || $("html, body").animate({
      scrollTop: $(".program").offset().top
    }, {
      duration: 240
    }), "свернуть" == $(this).text() ? $(this).text("смотреть полностью") : $(this).text("свернуть"), $(this).toggleClass("black-button"), $(".program-block").toggleClass("--active"), $(".program-schedule").css();
  }), offsetNextBlock(), $main.scrollspy({
    target: ".scrollspy",
    offset: $offsetNav
  }), tableHead(), $(".chosen-select").chosen({
    disable_search_threshold: 10
  }), $("[type='tel']").intlTelInput(), $(".datepicker").datepicker({
    format: "dd/mm/yyyy",
    language: "ru"
  });
});
var timeout = !1,
    delta = 200;

function resizeend() {
  new Date() - rtime < delta ? setTimeout(resizeend, delta) : (timeout = !1, tableHead(), offsetNextBlock());
}

function tableHead() {
  Modernizr.touchevents && $(window).width() < 600 ? $(".fixTable").tableHeadFixer({
    head: !1,
    left: 0
  }) : $(".fixTable").tableHeadFixer({
    head: !0,
    left: 1
  });
}

$(window).resize(function () {
  rtime = new Date(), !1 === timeout && (timeout = !0, setTimeout(resizeend, delta));
});
var tabLinks = document.querySelectorAll(".main__tabs-link"),
    tabContent = document.querySelectorAll(".main__tabs-content");
if (tabLinks) for (var e = 0; e < tabLinks.length; e++) {
  tabLinks[e].addEventListener("click", function (e) {
    e.preventDefault();
    var t = e.target.getAttribute("data-tab");

    for (var _e = 0; _e < tabLinks.length; _e++) {
      t === tabContent[_e].getAttribute("data-tab-content") ? (tabContent[_e].classList.add("--active"), tabLinks[_e].classList.add("active")) : (tabContent[_e].classList.remove("--active"), tabLinks[_e].classList.remove("active"));
    }
  });
}
$(function () {
  $(".run-slider__inner").slick({
    prevArrow: '<button type="button" class="run-slider__slick-btn --slick-prev"><i class="icon-prev"></i></button>',
    nextArrow: '<button type="button" class="run-slider__slick-btn --slick-next"><i class="icon-next"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: !0
  }), $(".run-slider__nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".run-slider__inner",
    focusOnSelect: !0
  }), $(window).on("load resize orientationchange", function () {
    window.matchMedia("(max-width: 639px)").matches ? ($(".info__cards").slick({
      slidesToShow: 1,
      dots: !0,
      arrows: !1,
      infinite: !1,
      asNavFor: ".info__fake-nav"
    }), $(".info__fake-nav").slick({
      slidesToShow: 6,
      dots: !1,
      arrows: !1,
      infinite: !1,
      asNavFor: ".info__cards"
    })) : $(".info__cards").slick("unslick");
  }), $(".header__burger").on("click", function () {
    $(".header__mobile").slideToggle(240), $(this).toggleClass("--close");
  }), $(".info__cards").on("afterChange", function (e, t, s, i) {
    var o = $(".info__event-link"),
        a = $(t.$slides.get(s)).data("slick-index");
    o.removeClass("--active"), $(o[a]).addClass("--active");
  });
  $(".info__card.card").height();
  var e = $(".info__wrapper").height();
  var t = ["01.05.2021", "02.05.2021", "03.05.2021", "04.05.2021", "04.05.2021", "04.05.2021"],
      s = ["ROSA\tPEAK", "ROSA QUEST", "ROSA CARNIVAL ", "ROSA GREEN TRAIL", "ROSA RED TRAIL ", "ROSA KIDS"];

  function i() {
    if (document.querySelector(".info__cards").getBoundingClientRect().top <= 0 && document.querySelector(".info__cards").getBoundingClientRect().top >= -e) return Math.round(($(".info__mountain").offset().top - $(".info__cards").offset().top) / (e / 6) - .5);
  }

  $(window).on("load scroll", function () {
    void 0 !== i() && $(".js-change-name").text() !== s[i()] && ($(".js-change-date").text(t[i()]), $(".js-change-name").text(s[i()]), $(".js-change-name").parents(".info__mountain").addClass("--changed"), setTimeout(function () {
      $(".js-change-name").parents(".info__mountain").removeClass("--changed");
    }, 240)), window.matchMedia("(min-width: 1024px)").matches && document.querySelectorAll(".info__card").forEach(function (e) {
      -e.getBoundingClientRect().bottom + 1.25 * $(window).height() > 0 && $(e).removeClass("--right");
    });
  }), $("a[data-slide]").click(function (e) {
    e.preventDefault();
    var t = $(".info__cards").offset().top;
    $(".info__cards").slick("slickGoTo", $(this).data("slide")), $("body,html").animate({
      scrollTop: t - $(".header").height()
    }, 500);
  });
});
//# sourceMappingURL=../sourcemaps/user.js.map
