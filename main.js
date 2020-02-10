const slideshow = document.querySelectorAll(".showcase");

const imageDelay = 6000;

let currentImageCounter = 0;

// slideshow[currentImageCounter].style.display = "block";
slideshow[currentImageCounter].style.opacity = "1";

setInterval(nextImage, imageDelay);

function nextImage() {
    // slideshow[currentImageCounter].style.display = "none";
    slideshow[currentImageCounter].style.opacity = "0";
    currentImageCounter = (currentImageCounter + 1) % slideshow.length;
    // slideshow[currentImageCounter].style.display = "block";
    slideshow[currentImageCounter].style.opacity = "1";
}