var appendAttr = function (visibility, click) {
    var num = 1;
    return {
        viewArea: function () {
            var sectionList = document.querySelectorAll('section');
            Array.prototype.slice.call(sectionList).forEach(function (section) {
                section.classList.add(visibility + num++);
            });
            return num = 1;
        },
        cvArea: function () {
            var btnList = document.querySelectorAll('[data-type="click"]');
            Array.prototype.slice.call(btnList).forEach(function (btn) {
                btn.classList.add(click + num++);
            });
            return num = 1;
        },
        setRel: function () {
            var aList = document.querySelectorAll('a');
            Array.prototype.slice.call(aList).forEach(function (els) {
                if (els.hasAttribute('target') === false) {
                    return;
                }
                if (els.getAttribute('target') !== '_blank') {
                    return;
                }
                els.setAttribute('rel', 'noopener noreferrer');
            });
        }
    };
}('view_area_', 'cv_area_');
appendAttr.viewArea();
appendAttr.cvArea();
appendAttr.setRel();

const $headerNav = $('.header__nav');
const $headerBtn = $('.header__btn');
$headerBtn.on('click', (e) => {
  $(e.currentTarget).parent().add($headerNav).toggleClass('is-active');
});

const $dlItem = $('.dl__item');
$dlItem.on('click', (e) => {
  $(e.currentTarget).toggleClass('is-active');
  $(e.currentTarget).find('dd').slideToggle();
});

const $headerNavItem = $('.header__nav__item');
const $headerBtnWrapeer = $('.header__btn__wrapper');
$headerNavItem.on('click', (e) => {
  e.preventDefault();
  $headerBtnWrapeer.add($headerNav).removeClass('is-active');
  const targetNum =  $(e.currentTarget).attr('id').slice(-2);
  const $targetSection = $('.sec' + targetNum);
  const targetPosition = $targetSection.offset().top;
  const headerHeight = $('.header').height();
  const position = targetPosition - headerHeight;
  $('body,html').animate({scrollTop:position}, 500);
})


$(window).on('load resize', function(){
  var HH = $('.header').outerHeight();

  if (window.matchMedia('(max-width: 1350px)').matches) {
    var HU = $('.header ul').outerHeight() + HH;
    $('.fv').css('margin-top' , HU);
    $('.header ul').css('top' , HH);
    
  } else if (window.matchMedia('(max-width: 750px)').matches) {

  } else{
    $('.fv').css('margin-top' , HH);
  }
});

$(function(){
  var pos = 0;
  var header = $('header');
  $(window).on('scroll', function(){
    if (window.matchMedia('(max-width: 750px)').matches) {
      var HH2 = $('.header').outerHeight();
      var HU2 = $('.header ul').outerHeight() + HH2;
      if($(this).scrollTop() < pos ){
        header.css('transform' , 'translateY(0)');
      }else{
        if(120 < pos) {
          header.css('transform' , 'translateY(-' + HU2 + 'px)');
        }
        
      }
      pos = $(this).scrollTop();
    }
  });
});

    $('a[href^="#"]').on('click', function () {
      var AHH = $('.header').outerHeight();
      var AHU = $('.header ul').outerHeight() + AHH;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      if (window.matchMedia('(max-width: 1350px)').matches) {
        var position = target.offset().top;
        $("html, body").animate({scrollTop: position}, 550, "swing");
      } else {
        var position = target.offset().top - AHH;
        $("html, body").animate({scrollTop: position}, 550, "swing");
      }
      return false;
    });