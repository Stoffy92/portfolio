

var $dipper = $('.header-reveal');
var $dipper2 = $('.projects-header');

var $revealHeader =('.header-reveal, .projects-header');

var $skillCard = $('.first, .second, .third, .fourth');
var $langCard = $('.skills-section');
var $projectCard = $('#blair, #react, #yelp'); 


$dipper.waypoint(function (direction) {
  if (direction === 'down') {
    $dipper.addClass('js-dipper-animate');
  } else {
    $dipper.removeClass('js-dipper-animate');
  }
}, { offset: '90%'})


$dipper2.waypoint(function (direction) {
  if (direction === 'down') {
    $dipper2.addClass('js-dipper-animate');
  } else {
    $dipper2.removeClass('js-dipper-animate');
  }
}, { offset: '90%'})

$skillCard.waypoint(function (direction) {
  if (direction === 'down') {
    $skillCard.addClass('fadeInLeft');
  } else {
    $skillCard.removeClass('fadeInLeft');
  }
}, { offset: '99%'})

$langCard.waypoint(function (direction) {
  if (direction === 'down') {
    $langCard.addClass('fadeInRight');
  } else {
    $langCard.removeClass('fadeInRight');
  }
}, { offset: '99%'})

$projectCard.waypoint(function (direction) {
  if (direction === 'down') {
    $projectCard.addClass('fadeInUp');
  } else {
    $projectCard.removeClass('fadeInUp');
  }
}, { offset: '99%'})




function smoothScroll () { // Scroll to div function
  document.querySelector('.about-me-section').scrollIntoView({
        behavior: 'smooth'
      });
  }