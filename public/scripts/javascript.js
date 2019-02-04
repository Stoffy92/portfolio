
// Modal PopUp 

// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close');

// When the user clicks the button, open the modal
btn[0].onclick = function() { // Wedding Button
	modal[0].style.display = 'block';
};

btn[1].onclick = function() { // React Button
	modal[1].style.display = 'block';
};

btn[2].onclick = function() { // Yelp Button
	modal[2].style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
	modal[0].style.display = 'none';
};

span[1].onclick = function() {
	modal[1].style.display = 'none';
};

span[2].onclick = function() {
	modal[2].style.display = 'none';
};

//

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) { // Wedding Modal
	if (event.target == modal[0]) {
		modal[0].style.display = 'none';
	}
};

window.onclick = function(event) { // React Modal
	if (event.target == modal[1]) {
		modal[1].style.display = 'none';
	}
};

window.onclick = function(event) { // Yelp Modal
	if (event.target == modal[2]) {
		modal[2].style.display = 'none';
	}
};

// TODO : Refactor Image Carousel

var slideIndex = 1; // track current image
showDivs(slideIndex);

function plusDivs(n) { // change current image by increasing number
  showDivs(slideIndex += n);
}

function showDivs(n) { // Slideshow images for ReactApp
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}

// TODO : Refactor Image Carousel

var slideWeddingIndex = 1;
showWeddingDivs(slideWeddingIndex);

function plusWeddingDivs(num) {
  showWeddingDivs(slideWeddingIndex += num);
}

function showWeddingDivs(num) { // Slideshow images for Wedding
  var w;
  var wSlides = document.getElementsByClassName("weddingSlides");
  if (num > wSlides.length) {slideWeddingIndex = 1} 
  if (num < 1) {slideWeddingIndex = wSlides.length} ;
  for (w = 0; w < wSlides.length; w++) {
    wSlides[w].style.display = "none"; 
  }
  wSlides[slideWeddingIndex-1].style.display = "block"; 
}

// TODO : Refactor Image Carousel

var slideCampIndex = 1;
showYDivs(slideCampIndex);

function plusYDivs(numm) {
  showYDivs(slideCampIndex += numm);
}

function showYDivs(numm) { // Slideshow images for YelpCamp
  var y;
  var ySlides = document.getElementsByClassName("ySlides");
  if (numm > ySlides.length) {slideCampIndex = 1} 
  if (numm < 1) {slideCampIndex = ySlides.length} ;
  for (y = 0; y < ySlides.length; y++) {
    ySlides[y].style.display = "none"; 
  }
  ySlides[slideCampIndex-1].style.display = "block"; 
}



function smoothScroll () { // Scroll to div function
  document.querySelector('.about-me').scrollIntoView({
        behavior: 'smooth'
      });
  }